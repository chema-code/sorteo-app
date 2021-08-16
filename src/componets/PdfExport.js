import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      title: {
        fontSize: 24,
        textAlign: 'center',
      },
      text: {
        fontSize: 10,
        textAlign: 'left',
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
      },
      pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
      },
});


// Create Document Component
export const PdfExport = (dataSorteo) => (
   
    <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        Sorteo
      </Text>
      <Text style={styles.title}>Operaciones Sorteo</Text>
      
      {
        dataSorteo.dataSorteo[0].map((oRow,i) => (
            <Text key= {"l"+i} style={styles.text}>{oRow}</Text>           
        ))
         
      }   
        
        <Text style={styles.title}>Ganadores Sorteo</Text>
               
        {
            dataSorteo.dataSorteo[1].map((oRow, i) => (
                <Text key= {"g" + i} style={styles.text}>{oRow}</Text>
            ))
        }      
    
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
   
    </Page>
  </Document>
);