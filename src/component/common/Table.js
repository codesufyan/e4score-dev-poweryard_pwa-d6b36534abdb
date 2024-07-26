import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from 'reactstrap';
import {
  MaterialReactTable, MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_TablePagination,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToolbarAlertBanner,
  useMaterialReactTable,
  MRT_TableContainer,
} from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { darken, lighten } from '@mui/material';
import { IconButton, Box, Grid,Typography, Tooltip } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CustomPaginationActions from './CustomPagination';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import move from '../../assets/truck.svg'

// const isF = function (user) {
//   return (
//     user &&
//     user.company &&
//     user.company.temperatureUnitsOfMeasure &&
//     user.company.temperatureUnitsOfMeasure === "Fahrenheit"
//   );
// };

const getFlooredFixed = function (v, d) {
  return (Math.floor(v * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
};
const Table = (props) => {
  const {data} = props
  console.log(data, `data`)
  const columns = useMemo(
    () => [
      {
        header: "Action",
        accessorKey: "action",
        width: 150,
        filterable: false,
        default: true,
        sortable: false,
        Cell: (row) => {
  
          let date;
          let spot;
          let status;
          let disable=false;
  
  
          return (
            <>
              {/* &nbsp; {(this.state.editButtonStatus === undefined || this.state.editButtonStatus) &&  */}
              <Button
                title="Edit"
                aria-label="Edit"
                className={"me-2"}
                // onClick={() => {
                //   if (this.state.autoRefreshEnabled === true) {
                //     this.setState({ editDepartAllowance: false });
                //   } else {
                //     this.setState({
                //       autoRefreshEnabled: false,
                //       editDepartAllowance: true,
                //       currentTaskUnderEdit: row.original,
                //       editModalOpen: true,
                //     });
                //   }
                // }}
              >
                  <img style={{ height: "16px", width: "18px" }} src={move} alt="move me" />
              </Button>
              {/* }  &nbsp; &nbsp; */}
              {/* {(this.state.moveButtonStatus === undefined || this.state.moveButtonStatus) && (this.props.currentLocation.enableMoveMe == true) && */}
  
                <Button
                  title={
                    // !(row.original.taskMoved == false || status === "Complete" || status === "Canceled" || status === null)
                    //   ? "Task Create Time: " + dateString + " Move To Spot: " + spot +
                    //   " Task Status: " + status
                    //   : "Move Me"
                    "Move Me"
                  }
                  aria-label="Move Me"
                  disabled={disable}
                className={"me-2"}
                  // className={"btn-primary"}
                  style={{ backgroundColor: row?.row?.original.taskMoved == true ? "#c8ced3" : "#51B32E", }}
                  // onClick={() => {
                  //   if (!row.original.taskMoved) { this.props.history.push("/task/new/" + row.original.taskUuid) }
                  //   else {
   
  
  
                  //     // getMoveTaskStatueByTaskuuid(
                  //     //   row.original.taskUuid,
                  //     //   (success) => {
                  //     //     date = success.content.moveDate;
                  //     //     spot = success.content.movedToSpotName ? success.content.movedToZone + "-" + success.content.movedToSpotName : "  ";
                  //     //     status = success.content.taskStatus;
                  //     //     this.setState({ movedtaskstatus: status });
                  //     //     if (success.content.taskStatus == "IsAssinged") {
                  //     //       status = "Assinged";
                  //     //     }
                  //     //     if (success.content.taskStatus == "InProgress") {
                  //     //       status = "In Progress";
                  //     //     }
  
                  //     //     console.log('SuccessAde:', success.content);
                  //     //     if (status && !(status == "Complete" || status == "Canceled" ))  {
                  //     //       confirmAlert({
  
  
                  //     //         closeOnClickOutside: false,
                  //     //         closeOnEscape: false,
                  //     //         overlayClassName: "overlay-custom-class-name",
                  //     //         customUI: ({ onClose }) => (
                  //     //           <div className="custom-ui" style={{ background: '#ffffff', padding: '20px', display: 'flex', flexDirection: 'column', borderRadius: "5px" }}>
                  //     //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  //     //               <div>
                  //     //                 <div style={{ display: 'flex', alignItems: 'center' }}>
                  //     //                   <div>
                  //     //                     <h5>Task Info</h5>
                  //     //                   </div>
                  //     //                   <Button className="btn btn-primary close-button" onClick={onClose} style={{ marginLeft: 'auto' }}>
                  //     //                     &times;
                  //     //                   </Button>
                  //     //                 </div>
                  //     //                 <hr style={{ margin: '2px 0', border: '1px solid #ccc' }} />
                  //     //                 <div style={{ background: '#f5f5f5', padding: '20px' }}>
                  //     //                   <div>        Task Create Time:   <MomentDisplay date={date} timezone={this.props.currentLocation && this.props.currentLocation.timezone} />
                  //     //                   </div>
                  //     //                   <div>        Move To Spot:{spot}
                  //     //                   </div>
                  //     //                   <div>        Task Status: {status}
                  //     //                   </div>
  
                  //     //                 </div>
                  //     //               </div>
                  //     //             </div>
                  //     //           </div>
                  //     //         ),
  
  
                  //     //       });
                  //     //     }
                  //     //     else{
  
                  //     //       disable=true;
                  //     //     }
                  //     //   },
                  //     //   (failure) => {
                  //     //     console.error('Failure:', failure);
                  //     //   }
                  //     // );
  
  
  
                  //   }
                  // }}
                >
                  <img style={{ height: "16px", width: "18px" }} src={move} alt="move me" />
                </Button>
                {/* } &nbsp; &nbsp; */}
              {/* {(this.state.departButtonStatus === undefined || this.state.departButtonStatus) &&*/} 
              <Button 
                title="Depart"
                aria-label="Depart"
                className={"btn-danger"}
                // disabled={this.state.autoRefreshEnabled === true}
                // onClick={() => {
                //   if (this.state.autoRefreshEnabled === true) {
                //     this.setState({ editDepartAllowance: false });
                //   } else {
                //     this.setState({
                //       autoRefreshEnabled: false,
                //       editDepartAllowance: true,
                //       currentTask: row.original,
                //       cancelModalOpen: true,
                //     });
                //   }
                // }}
              >
                  <img style={{ height: "16px", width: "18px" }} src={move} alt="move me" />
              </Button>
              {/* } */}
            </>
          );
        },
  
      },
      {
        accessorKey: "createdBy",
        header: "Task Created By User",
        size: 200,
      },
      {
        accessorKey: "createdDate",
        header: "Task Created Datetime",
        dataType: "date",
        operator: "GT",
        Cell: (row) => {
          // let task = row.original;
          if (row.renderedCellValue) {
            return (
             <div className='d-flex w-100'>
                    <span>{row?.renderedCellValue ? new Date(row?.renderedCellValue).toLocaleDateString() : ''}</span>
                </div>
            );
          } else {
            return null;
          }
        },
      },
      {
        accessorKey: "completedDate",
        header: "Task Complete Datetime",
        default: false,
        filterable: false,
        dataType: "date",
        operator: "LT",
        sortable: true,
        Cell: (row) => {
          if (row.renderedCellValue) {
            return (
              <div className='d-flex w-100'>
                    <span>{row?.renderedCellValue ? new Date(row?.renderedCellValue).toLocaleDateString() : ''}</span>
                </div>
            );
          } else {
            return <div />;
          }
        },
      },
      {
        accessorKey: "lastModifiedBy",
        header: "Last Updated By User",
        filterable: true,
        sortable: true,
        default: false,
        Cell: (row) => {
          if (row.renderedCellValue) {
            return row.renderedCellValue;
          } else {
            return null;
          }
        },
      },
      {
        accessorKey: "lastModified",
        header: "Last Updated Datetime",
        default: false,
        filterable: false,
        sortable: true,
        dataType: "date",
        operator: "GT",
        sortable: true,
        Cell: (row) => {
          if (row.renderedCellValue) {
            return (
              <div className='d-flex w-100'>
                    <span>{row?.renderedCellValue ? new Date(row?.renderedCellValue).toLocaleDateString() : ''}</span>
                </div>
            );
          } else {
            return <div />;
          }
        },
      },
      {
        accessorKey: "spotType",
        header: "Spot Type",
        default: true,
        filterable: true,
        sortable: true,
        Cell: row => {
            let name = row?.row?.original.moveTo ? row?.row?.original.moveTo.name : 'Null';
            let zone = row?.row?.original.moveTo ? row?.row?.original.moveToZone : 'Null';
            if (name) {
                return name + ' - ' + zone;
            } else {
                return zone;
            }
        }
      },
      {
        accessorKey: "moveToZone",
        header: "Zone Name",
        default: true,
        filterable: true,
        sortable: true,
        Cell: row => {
            let name = row?.row?.original.moveTo ? row?.row?.original.moveTo.name : 'Null';
            let zone = row?.row?.original.moveTo ? row?.row?.original.moveToZone : 'Null';
            if (name) {
                return name + ' - ' + zone;
            } else {
                return zone;
            }
        }
      },
      {
        accessorKey: "spotName",
        header: "Spot #",
        default: true,
        filterable: true,
        sortable: true,
      },
      {
        accessorKey: "trailerName",
        header: "Trailer Name",
        default: true,
        filterable: true,
        sortable: true,
      },
      {
        accessorKey: "trailerNumber",
        header: "Trailer Number",
        default: true,
        filterable: true,
        sortable: true,
      },
      {
        accessorKey: "comments",
        header: "Comments",
        default: true,
        filterable: true,
        sortable: true,
        // Cell: (row) => {
        //   const targetId = `commentsCell_${row.row.index}`;
  
        //   return (
        //     <span
        //       id={targetId}
        //       title={this.state.Showhover ? " " : row.original.comments}
        //       onClick={() => {
        //         this.handleClickComments(row.index);
        //       }}
        //     >
        //       {this.state.showTooltip &&
        //         this.state.clickedRowIndex == row.index && (
        //           <Tooltip
        //             style={{ color: "#fff" }}
        //             target={targetId}
        //             isOpen={this.state.showTooltip}
        //             placement="right"
        //           >
        //             {row.original.comments}
        //           </Tooltip>
        //         )}
        //       {console.log(this.state.Showhover, "titlestate")}
        //       {row.original.comments}
        //     </span>
        //   );
        // },
      },
      {
        accessorKey: "assetType",
        header: "Trailer Type",
        default: true,
        filterable: true,
        sortable: true,
      },
      {
        accessorKey: "assetStatus",
        header: "Trailer Status",
        default: true,
        title: "Current asset status for the task",
        filterable: true,
        sortable: true,
      },
      {
        accessorKey: "shipmentNumber",
        header: "Shipment Number",
        default: true,
        filterable: true,
        sortable: true,
      },
      {
        accessorKey: "sealed",
        header: "Sealed",
        default: true,
        filterable: true,
        sortable: true,
        Cell: (row) => {
          return row?.row?.original?.sealed ? "Yes" : "No";
        },
      },
      {
        accessorKey: "sealNumber",
        header: "Seal Number",
        default: true,
        filterable: true,
        sortable: true,
        Cell: (row) => {
          return (
            <span title={row?.row?.original?.sealNumber}>{row?.row?.original?.sealNumber}</span>
          );
        },
      },
      {
        accessorKey: "temperatureInc",
        header: "Temp (℃)",

        default: true,
        title:
          "Temperature is the last reported temperature in the create/edit task form",
        filterable: false,
        sortable: true,
        Cell: (row) => {
          console.log(row.renderedCellValue, `row in cell`)
          return getFlooredFixed(row.renderedCellValue, 1) + "℃";
          
        },
      },
      {
        accessorKey: "temperatureDeviationInc",
        header: "Temp Dev (℃)",
        default: true,
        title:
          "Temperature Deviation is the difference between the set point entered for the task and the most recent reported temperature.",
        filterable: false,
        sortable: true,
        Cell: (row) => {
          return getFlooredFixed(row.renderedCellValue, 1) + "℃";
        },
      },
    ],
    [],
  );


  //optionally access the underlying virtualizer instance
  const rowVirtualizerInstanceRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    //scroll to the top of the table when the sorting changes
    try {
      rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
    } catch (error) {
      console.error(error);
    }
  }, [sorting]);
  const globalTheme = useTheme(); //(optional) if you already have a theme defined in your app root, you can import here

  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: globalTheme.palette.mode, //let's use the same dark/light mode as the global theme
          primary: {
            main: '#51B32E', // Provide the main property for the color
          }, //swap in the secondary color as the primary for the table
          info: {
            main: 'rgb(255,122,0)', //add in a custom color for the toolbar alert background stuff
          },

        },
        components: {
          MuiTableRow: {
            styleOverrides: {
              hover: {
                backgroundColor: '#51B32E', // Change this to your desired green color
              },
            },
          },
        },

      }),
    [globalTheme],
  );
  const table = useMaterialReactTable({
    draggingBorderColor: '#00000',
    columns,
    data, //10,000 rows

    defaultDisplayColumn: { enableResizing: true },
    enableBottomToolbar: true,
    enableColumnResizing: true,
    enableGlobalFilter: true, //
    enableGlobalFilterModes: true,
    enableColumnDragging: true,
    enableColumnOrdering: true,
    enablePagination: true,

    muiTableContainerProps: { sx: { maxHeight: '600px', backgroundColor: "#000000" } },

    muiTableBodyProps: {
      sx: (theme) => ({



        '& tr:not([data-selected="true"]):not([data-pinned="true"]):hover > td':
        {
          backgroundColor: lighten("rgba(81, 179, 46,1)", 0.5),
        },



      }),
    },
    onSortingChange: setSorting,
    state: { isLoading, sorting },
    rowVirtualizerInstanceRef, //optional
    rowVirtualizerOptions: { overscan: 5 }, //optionally customize the row virtualizer
    // columnVirtualizerOptions: { overscan: 2 }, //optionally customize the column virtualizer
  });
  return (
    <ThemeProvider theme={tableTheme}>
      <Row>
    <Box sx={{ display: 'flex'}}>
        <Col md='10'>
      <Box
        sx={(theme) => ({
          display: 'flex',
          backgroundColor: 'inherit',
          borderRadius: '4px',
          flexDirection: 'row',
          gap: '16px',
          justifyContent: 'space-between',
          padding: '0 16px 10px 0',
          '@media max-width: 768px': {
            flexDirection: 'column',
          },
        })}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MRT_ToggleFiltersButton table={table} />
          <MRT_ShowHideColumnsButton table={table} />
          <MRT_ToggleDensePaddingButton table={table} />
          <Tooltip title="Print">
            <IconButton onClick={() => window.print()}>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <MRT_TableContainer table={table} />
      </Col>
      <Col>
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'space-between',
          padding: '24px 16px',
          '@media max-width: 768px': {
            flexDirection: 'column',
          },
        })}
      >
        <Box>

        </Box>
          {/* <Col sm="2" md="2" className='fs-4'> */}
        {/* <Box> 
 <ReplayIcon  sx={{ display: 'flex', alignItems: 'center', color:"#51B32E" , marginTop:"15px", marginLeft:"30px"}}/>
 </Box> */}
          <Box>
          {/* <MRT_TablePagination table={table} /> */}
          {/* <CustomPaginationActions /> */}
          <FormGroup check className='mt-3'>
            <Input type="checkbox" />
            {' '}
            <Label className='label_task' check>
              Show Pending Tasks
            </Label>
          </FormGroup>
          <FormGroup check className='mt-3'>
            <Input type="checkbox" />
            {' '}
            <Label className='label_task' check>
              Show Assigned Tasks
            </Label>
          </FormGroup>
          <FormGroup check className='mt-3'>
            <Input type="checkbox" />
            {' '}
            <Label className='label_task' check>
              Show By Date
            </Label>
          </FormGroup>
          <FormGroup check className='mt-3'>
          <button
          className="custom_button_pagination border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'First'}
        </button>
        </FormGroup>
        <FormGroup check className='mt-3'>
        <button
          className="custom_button_pagination border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'Next'}
        </button>
</FormGroup>
        <FormGroup check className='mt-3'>
        
        <button
          className="custom_button_pagination border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'Prev'}
        </button>
        </FormGroup>
        
        <FormGroup check className='mt-3'>
        <button
          className="custom_button_pagination border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'Last'}
        </button>
</FormGroup>
        </Box>
      </Box>
      </Col>
    </Box>
    </Row>
    </ThemeProvider>
  );

};

//virtualizerInstanceRef was renamed to rowVirtualizerInstanceRef in v1.5.0
//virtualizerProps was renamed to rowVirtualizerOptions in v1.5.0

export default Table;