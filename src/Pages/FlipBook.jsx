import React, {  useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import pdf from './CatalogoSurtidor.pdf';
// import Loading from "./Loading";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Pages = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}  >
            {props.children}
            N.Pagina: {props.number}
        </div>
    );
});

function FlipBook() {


    // const [loading, setLoading] = useState(true);
  
    const [numPages, setNumPages] = useState(null);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    //   setTimeout(()=>{

    //       setLoading(false);
    //   },1000)
    };
    return (
<> 

        {/* {loading && <Loading loading = {loading} />}  hidden  lg:block xl:block  350 -500*/}
        
        <div className="grid grid-cols-4  ">
          <div className='col-span-4 text-white font-extrabold text-center pb-2 text-4xl  '>SURTIDORES </div>
        
          <div className='col-span-4 hidden lg:flex xl:flex justify-center items-center scroll-mx-2 overflow-hidden'> 
              <HTMLFlipBook width={500} height={650} showCover={true}>
                {[...Array(numPages).keys()].map((n) => (
                  <Pages number={`${n+1}`} key={n}>
                    <Document
                      file={pdf}
                      onLoadSuccess={onDocumentLoadSuccess} 
                                    
                      >
                        <Page pageNumber={n+1}  renderAnnotationLayer={false} renderTextLayer={false} width={500}  />
                    </Document>
                        
                  </Pages>
                ))}
              </HTMLFlipBook>

          </div> 
          <div className='col-span-4 sm:flex md:flex lg:hidden xl:hidden justify-center items-center scroll-mx-2 overflow-hidden'> 
              <HTMLFlipBook width={500} height={650} showCover={true}>
                {[...Array(numPages).keys()].map((n) => (
                  <Pages number={`${n+1}`} key={n}>
                    <Document
                      file={pdf}
                      onLoadSuccess={onDocumentLoadSuccess} 
                                    
                      >
                        <Page pageNumber={n+1}  renderAnnotationLayer={false} renderTextLayer={false} width={500}  />
                    </Document>
                        
                  </Pages>
                ))}
              </HTMLFlipBook>

          </div> 

        </div>
      </>
    );
}

export default FlipBook;
