import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect, useState } from 'react';

const MainContentStartPage = () => {
        const [rowData, setRowData] = useState(null);


        function rowDataTest() {
            let rowData2 = [];
            fetch("https://api.lunarcrush.com/v2?data=market&key=vhghf5jxd8fgotjykitjow&limit=100&sort=mc&desc=true")
            .then((e)=> {
                return e.json();
                })
                .then((data) => {
                    if(data){
                        for (let i=0; i < data.data.length; i++) {
                            var xxx = {coin: data.data[i].n, "24/h": data.data[i].pc, price: data.data[i].p.toFixed(2), marketCap: data.data[i].mc.toFixed(0)};
                            rowData2.push(xxx);                     
                        }
                        setRowData(rowData2);
                    }             
                })
        }

        useEffect(() => {

                rowDataTest();
                setInterval(rowDataTest, 30000);
        },[])


        



        return (
            
                    <div className="ag-theme-alpine" style={{height: "600px", width: "80%", margin: "50px auto 0px", border: "1px solid red"}}>
                        <AgGridReact 
                            rowData={rowData}  
                            rowSelection="single"
                            style={{height: "100%", width: "50%"}}
                            
                            >
                            <AgGridColumn field="coin" width="170px" sortable= {true} filter={true} cellStyle={{fontWeight: ""}}></AgGridColumn>
                            <AgGridColumn field= "24/h" 
                                            width="100%"
                                            sortable= {true} 
                                            cellStyle={(params) => { return params.value < 0 ? {color: "red"} : {color: "green"};
                                
                            }}></AgGridColumn>
                            <AgGridColumn field="price" width="130px" sortable= {true} ></AgGridColumn>
                            <AgGridColumn field="marketCap" width="130px" sortable= {true} ></AgGridColumn>
                        </AgGridReact>
                    </div>
     
        );
};
 
export default MainContentStartPage;