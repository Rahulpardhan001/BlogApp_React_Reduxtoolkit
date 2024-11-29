import React from 'react';
import Excel from 'exceljs';

const ExcelDataRead = () => {
    const handleChange = (e) => {
        const file = e.target.files[0];
        const wb = new Excel.Workbook();
        const reader = new FileReader();

        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            const buffer = reader.result;
            wb.xlsx.load(buffer).then((workbook) => {
                console.log(workbook, 'workbook instance');

                // Define required columns by index (assuming first row is the header)
                const requiredColumns = {
                    name: 1,      
                    urlLink: 2,   
                    title: 3,    
                    description: 4, 
                    category: 5,     
                };

                workbook.eachSheet((sheet, id) => {
                    sheet.eachRow((row, rowIndex) => {
                        // Skip header row if necessary (assuming row 1 is the header)
                        if (rowIndex === 1) return;

                        const values = row.values;
                        const missingColumns = [];

                        // Check each required column for missing data
                        Object.keys(requiredColumns).forEach((col) => {
                            const colIndex = requiredColumns[col];
                            if (!values[colIndex]) {
                                missingColumns.push(col);
                            }
                        });

                        // If there are missing columns, log an error; otherwise, log the data
                        if (missingColumns.length > 0) {
                            console.error(
                                `Row ${rowIndex} is missing data in columns: ${missingColumns.join(', ')}`
                            );
                        } else {
                            console.log(`Row ${rowIndex} data:`, values);
                        }
                    });
                });
            });
        };
    };

    return (
        <div>
            <div>Upload Excel File</div>
            <input type="file" onChange={handleChange} />
        </div>
    );
};

export default ExcelDataRead;



// import { Icon } from "@iconify/react";
// //redux
// import { useSelector, useDispatch } from "react-redux";
// import { toogleMode } from "../Redux/Slices/Slice";
// //Actions
// // import { toggleMode } from "../store/slices/uislice";
// const DarkModeToggler = () => {
//   const isDarkMode = useSelector((content) => content.ui.isDarkMode);
//   const dispatch = useDispatch();
//   const toggleModeHandler = () => {
//     dispatch(toogleMode());
    
//   };
//   return (
//     <div>
//       <Icon
//         onClick={toggleModeHandler}
//         icon={isDarkMode ? "circum:dark" : "iconamoon:mode-light"}
//         className="text-3xl cursor-pointer dark:text-white"
//       />
//     </div>
//   );
// };
// export default DarkModeToggler;


