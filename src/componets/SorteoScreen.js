import React, { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';



import { useForm } from '../hooks/useForm';
//import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
//import { PdfExport } from './PdfExport';
import Progress_bar from './Progress_bar';
import { pause, Sortear2 } from '../Utils/SorteoFunctions';
//import { doc, generarPdf } from './Pdf_jspdf';


//import * as  pdfKit from 'pdfkit';

export const SorteoScreen = () => {
    const [parsed, setParsed] = useState([]);
    const [hasData, setHashData] = useState(false);
    const [finSorteo, setFinSorteo] = useState(false);
    const [sorteoData, setSorteoData] = useState();
    const uploadFile = useRef(null);
    const [showProgessBar, setShowProgressBar] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        console.log(parsed);
    }, [parsed])

    // useEffect(() => {
    //     //console.log(parsed);
    // }, [progress])

    const handleFiles = () => {
        console.log(uploadFile.current.files);
        (async () => {
            console.log('uploaded!');
            const text = await uploadFile.current.files[0].text();
            const data = await d3.csvParse(text);
            setParsed(data);
            setHashData(true);
        })();
    }

    const initialRegisterState = {
        NumPremios: 20,
        NumMinSorteo: 1,
        NumMaxSorteo: 200
    }
    const [formRegisterValues, handleRegisterInputChange] = useForm(initialRegisterState);

    const { NumPremios, NumMinSorteo, NumMaxSorteo } = formRegisterValues;

    const handleSortear = async () => {

        setShowProgressBar(true);
        console.log('Empieza Sorteo', NumPremios, NumMinSorteo, NumMaxSorteo);
        const data = await Sortear2(parsed, NumPremios, NumMinSorteo, NumMaxSorteo, setParentProgress)
        setProgress(100);
        setShowProgressBar(false);
        sorteoFinalizado(data);

    }
    const sorteoFinalizado = async (data) => {

        console.log("fin sorteo", data);
        await pause(1000);
        setSorteoData(data);
        setFinSorteo(true);
        await pause(1000);
    }


    const setParentProgress = async (progress) => {
        console.log('setParentProgress', progress);
        setProgress(Math.round(progress));

    }
    const handleImprimir = () => {
        window.print();
    }

    // const handleExportarPDF = () => {

    // }


    return (


        <div>
            <h1>Sorteo App v0.6</h1>
            <br></br>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">
                        <div className="input-group input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-NumPremios">*Total premios del sorteo</span>
                            </div>
                            <input
                                type="text"
                                name="NumPremios"
                                onChange={handleRegisterInputChange}
                                value={NumPremios}
                                placeholder="Total Premios"
                                autoComplete="off"
                                required
                                className="form-control" aria-label="Default" aria-describedby="inputGroup-NumPremios" />
                        </div>

                        <div className="input-group input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-NumMinSorteo">*Valor inicial del sorteo</span>
                            </div>
                            <input
                                type="text"
                                name="NumMinSorteo"
                                onChange={handleRegisterInputChange}
                                value={NumMinSorteo}
                                placeholder="Número inicial sorteo"
                                autoComplete="off"
                                required
                                className="form-control" aria-label="Default" aria-describedby="inputGroup-NumMinSorteo" />
                        </div>



                        <div className="input-group input-group mb-3">
                            <div cclassNamelass="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-NumMaxSorteo">*Valor máximo del sorteo</span>
                            </div>
                            <input
                                type="text"
                                name="NumMaxSorteo"
                                onChange={handleRegisterInputChange}
                                value={NumMaxSorteo}
                                placeholder="Número máximo sorteo"
                                autoComplete="off"
                                required
                                className="form-control" aria-label="Default" aria-describedby="inputGroup-NumMaxSorteo" />
                        </div>


                        {/* <div class="input-group input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-FileUpload">Fichero CSV con las participaciones</span>
                    </div>
                   <input ref={uploadFile} onChange={handleFiles} type="file" id="input"   
                    aria-label="Default" aria-describedby="inputGroup-FileUpload"/>
                </div> */}

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Subir</span>
                            </div>
                            <div className="custom-file">
                                <input required ref={uploadFile} onChange={handleFiles} disabled={hasData}
                                    type="file" id="input" class="custom-file-input" id="inputGroupFile01"></input>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Elegir Fichero</label>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="row">
                    <div className="col-5">
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSortear}
                                disabled={finSorteo} >Iniciar Sorteo
                            </button>
                        </div>
                    </div>
                </div>
                {finSorteo ? (
                    <div className="row mt-5">
                        <div className="col-5">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleImprimir}
                                disabled={!finSorteo} >Imprimir Resultados
                            </button>
                        </div>
                        {/* <div>
                            <div>
                                {generarPDF()}
                            </div>
                        </div> */}
                        {/* <div className="col-5">
                            <BlobProvider document={<PdfExport dataSorteo={sorteoData} />}>
                                {({ url, loading, error }) => {
                                    if (loading) {
                                        return (
                                            <span>
                                                generating document...
                                            </span>
                                        );
                                        pause(1000);
                                    }
                                    if (!loading && url) {

                                        return (
                                            <a href={url} download className="btn btn-primary" >
                                                Descargar Resultados
                                            </a>
                                        );
                                    }
                                    if (error) {
                                        console.error(error);
                                        return <p>An error occurred</p>;
                                    }
                                    return null;
                                }}
                            </BlobProvider>
                        </div> */}

                    </div>) : (<div></div>)}
                <div>
                    <div>

                        {showProgessBar ? (<Progress_bar bgcolor="orange" progress={progress} height={30} />) : (<div></div>)}
                        {/* {finSorteo ? (
                        <PDFDownloadLink document={<PdfExport dataSorteo={sorteoData}/>} fileName="somename.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : 'Download now!'
                        }
                        </PDFDownloadLink>
                     ):(<div></div>)} */}
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="container col-12">
                <div className="row">
                    <div className="card p-1 col-2">
                        <div className="card-body p-1"> <h2 className="card-title text-center">Paticipaciones</h2>
                            <div>
                                {hasData ? (


                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Orden</th>
                                                <th scope="col">Participación</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                parsed.map((oRow, i) => (
                                                    <tr key={"p" + i} className={((i % 2) === 0) ? 'table-active' : 'table'}>
                                                        <td className="text-right">{i + 1}

                                                        </td>
                                                        <td className="text-left"
                                                        >{oRow.idsolicitante}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                ) : (
                                    <div></div>
                                )}</div>
                        </div>
                    </div>
                    <div className="card p-1 col-6">
                        <div className="card-body p-1 "><h2 className="card-title text-center">Sorteo</h2>
                            <div>
                                {sorteoData ? (
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Orden</th>
                                                <th scope="col">Detalle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                sorteoData[0].map((oRow, i) => (
                                                    <tr key={"p" + i} className={((i % 2) === 0) ? 'table-active' : 'table'}>
                                                        <td className="text-right">{i + 1}

                                                        </td>
                                                        <td className="text-left"
                                                        >{oRow}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                ) : (<div></div>)
                                }

                            </div>
                        </div>
                    </div>
                    <div className="card p-1 col-2">
                        <div className="card-body p-1"><h2 className="card-title text-center">Números</h2>
                            <div>
                                {finSorteo ? (
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Orden</th>
                                                <th scope="col">Número Ganador</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                sorteoData[2].map((oRow, i) => (
                                                    <tr key={"p" + i} className={((i % 2) === 0) ? 'table-active' : 'table'}>
                                                        <td className="text-right">{i + 1}

                                                        </td>
                                                        <td className="text-right"
                                                        >{oRow}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                ) : (<div></div>)
                                }

                            </div>
                        </div>
                    </div>
                    <div className="card p-1 col-2">
                        <div className="card-body p-1"><h2 className="card-title text-center">Abonados</h2>
                            <div>
                                {finSorteo ? (

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Orden</th>
                                                <th scope="col">Id Unico</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                sorteoData[1].map((oRow, i) => (
                                                    <tr key={"p" + i} className={((i % 2) === 0) ? 'table-active' : 'table'}>
                                                        <td className="text-right">{i + 1}

                                                        </td>
                                                        <td className="text-right"
                                                        >{oRow}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                ) : (<div></div>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
};
