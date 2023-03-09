import React, {useState, useEffect} from "react";
import { CChart } from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardTitle,
  CCol,
  CContainer,
  CImage,
  CRow,
  CCardFooter,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell
} from "@coreui/react";
import AuthUser from '../../../components/Auth/AuthUser';
import CIcon from '@coreui/icons-react'
import { cilArrowBottom,cilCheckCircle } from '@coreui/icons'
import image1 from '../../../assets/images/dashboardlogo.png';
import image2 from '../../../assets/images/icon1.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
function index() {
  const {http,getUser}= AuthUser();
  const percentage = 66;
  const [companyAffiliateChart, setCompanyAffiliateChart] = useState(0);
  const [companyAffiliateUsersChart,setCompanyAffiliateUsersChart] = useState(0);
  const [aid,setAID] = useState([]);
  const aidMonthsLabels=[];

  const fetchDashboardCharts = () => {
    http.get("/fetchDashboardCharts").then((res) => {
      setCompanyAffiliateChart(res.data.companyAffiliateChart);
      setCompanyAffiliateUsersChart(res.data.companyAffiliateUsersChart);
      setAID(res.data.aid);
    });
  };



  useEffect(() => {
    fetchDashboardCharts();
  }, []);
  return (
    <>
      <CContainer>
        <CRow className="justify-content-center">
          
          <CCol md={12} >
            <CRow>
              <CCol md={8}>
                <CCard className="card-style">
                  <CCardBody>
                    <CRow>
                      <CCol md={4}>
                        <h5>
                          Commissions
                        </h5>
                        <CCol md={12}>
                          <p className="text-black">Sep(Projected):$0.00</p>
                        </CCol>
                      </CCol>
                      <CCol md={8}>
                        <h6 className="text-info">See Full Commissions History</h6>
                        <CRow>
                          <CCol md={6}>
                            <p className="text-black">Last Paid:$0.00</p>
                          </CCol>
                          <CCol md={6}>
                            <p className="text-black">Percentage Changed:$0.00</p>
                          </CCol>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol md={4}>
                <CImage className="w-auto" align="center" src={image1} />
              </CCol>
            </CRow>
          </CCol>
          <CCol md={12} className="mt-4">
            <CRow>
              <CCol md={3}>
                <CCard className="h-100 card-style radius">
                  <CCardBody>
                    <CRow>
                      <CCol md={12}>
                        <CTable>
                          <CTableBody>
                            <CTableRow>
                              <CTableHeaderCell className="text-black border-0">Enrollments</CTableHeaderCell>
                              <CTableDataCell className="border-0"> <CImage align="center" src={image2} /></CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Year to Date(YTD)</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Month to Date(MTD)</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Same Period Last Month</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Last 30 days</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                          </CTableBody>
                        </CTable>
                      </CCol>
                    </CRow>
                  </CCardBody>
                  <CCardFooter className="dashback"></CCardFooter>
                </CCard>
              </CCol>
              <CCol md={3}>
                <CCard className="h-100 card-style radius">
                  <CCardBody>
                    <CRow>
                    <CCol md={12}>
                        <CTable>
                          <CTableBody>
                            <CTableRow>
                              <CTableHeaderCell className="text-black border-0">Retension Scorecard</CTableHeaderCell>
                              <CTableDataCell className="border-0"> <CImage align="center" src={image2} /></CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">New Clients (September)</CTableDataCell>
                              <CTableDataCell className="border-0">$0.00</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Sep activities (as on 10/08)</CTableDataCell>
                              <CTableDataCell className="border-0">$0.00</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Target Retension Rate</CTableDataCell>
                              <CTableDataCell className="border-0" style={{color:"red"}}><CIcon icon={cilArrowBottom} style={{color:"red"}}/>0%</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-success border-0">Above Retension Target By</CTableDataCell>
                              <CTableDataCell className="border-0 text-success">2.2%</CTableDataCell>                    
                            </CTableRow>
                          </CTableBody>
                        </CTable>
                      </CCol>
                    </CRow>
                  </CCardBody>
                  <CCardFooter className="dashback"></CCardFooter>
                </CCard>
              </CCol>
              <CCol md={3}>
                <CCard className="h-100 card-style radius">
                  <CCardBody>
                    <CRow>
                    <CCol md={12}>
                        <CTable>
                          <CTableBody>
                            <CTableRow>
                              <CTableHeaderCell className="text-black border-0">Leads</CTableHeaderCell>
                              <CTableDataCell className="border-0"> <CImage align="center" src={image2} /></CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Year to Date(YTD)</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Month to Date(MTD)</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Same Period Last Month</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Last 30 days</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Converted to Paid(YTD)</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                          </CTableBody>
                        </CTable>
                      </CCol>
                    </CRow>
                  </CCardBody>
                  <CCardFooter className="dashback"></CCardFooter>
                </CCard>
              </CCol>
              <CCol md={3}>
                <CCard className="card-style radius">
                  <CCardBody>
                    <CRow>
                    <CCol md={12}>
                        <CTable>
                          <CTableBody>
                            <CTableRow>
                              <CTableHeaderCell className="text-black border-0">Referrals</CTableHeaderCell>
                              <CTableDataCell className="border-0"> <CImage align="center" src={image2} /></CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Year to Date(YTD)</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Month to Date(MTD)</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Same Period Last Month</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Last 30 days</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Registered Companies</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                            <CTableRow>
                              <CTableDataCell className="text-black border-0">Referred Enrollments(YTD)</CTableDataCell>
                              <CTableDataCell className="border-0">0</CTableDataCell>                    
                            </CTableRow>
                          </CTableBody>
                        </CTable>
                      </CCol>
                    </CRow>
                  </CCardBody>
                  <CCardFooter className="dashback"></CCardFooter>
                </CCard>
              </CCol>
            </CRow>
          </CCol>
          <CCol md={12} className="mt-4">
            <CRow>
                <CCol md={6} className="h-100">
                <CCard className="card-style">
                <CCardBody>
                  <CRow>
                    <CCol md={6}>
                      <CButton 
                        className="btns btn-warning" style={{padding: "3%"}}>20 Suspended members
                      </CButton>
                    </CCol>
                    <CCol md={6}>
                      <CButton 
                        className="btns btn-warning" style={{padding: "3%"}}>25 Closed/Pending members
                      </CButton>
                    </CCol>
                  </CRow>
                  <CTable className="border mt-4">
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">First Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell>some</CTableDataCell>
                        <CTableDataCell>Gupp</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                  <CCol md={12}>
                    <div align="center">
                      <button 
                        className="btns btn-list w-50" style={{padding: "1%"}}>See Complete List
                      </button>
                    </div> 
                  </CCol>
                </CCardBody>
            </CCard>
          </CCol>
              <CCol md={6} className="h-100">
                <CCard className="card-style">
                  <CCardBody>
                    <h4 className="text-center">
                      Max Out Your Affiliate Benefits to Maximize <br/>your Potential
                    </h4>
                    <div align="center">
                      <button 
                        className="btns btn-lists text-success">Your Affiliate Profile is 40% Completed
                      </button>
                    </div>
                    <div className="p-3 mt-2">
                    <h6 className="text-info"><b>Join Referral Program</b></h6>
                    <p>Earn cash upfront PLUS ongoing monthly Commission by referring other businesses to join our program. <button className="btns btn-list">Click here</button></p>
                    <h6 className="text-info">Enroll in credit Snapshot</h6>
                    <p>Lead Generation Program.Get and convert qualified leads. <button className="btns btn-list">Click here</button></p>
                      <CRow>
                        <CCol md={3}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                              // Rotation of path and trail, in number of turns (0-1)
                              rotation: 0.25,
                              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                              strokeLinecap: 'butt',
                              // Text size
                              textSize: '10px',
                              // How long animation takes to go from one percentage to another, in seconds
                              pathTransitionDuration: 0.5,
                              // Can specify path transition in more detail, or remove it entirely
                              // pathTransition: 'none',
                              // Colors
                              pathColor: `rgba(115, 199, 63, ${percentage / 100})`,
                              textColor: '#f88',
                              trailColor: '#d6d6d6',
                              backgroundColor: '#3e98c7',
                            })}
                          />
                        </CCol>
                        <CCol md={9} style={{marginTop:"2%"}}>
                          <p><CIcon icon={cilCheckCircle} size="lg" className="" style={{color:"#73c73f"}}/>&nbsp;Set Up Co-brand</p>
                          <p><CIcon icon={cilCheckCircle} size="lg" className="" style={{color:"#73c73f"}}/>&nbsp;Set Up Member Credentials Pass</p>
                          <p><CIcon icon={cilCheckCircle} size="lg" className="" style={{color:"#73c73f"}}/>&nbsp;Provide bank Details</p>
                        </CCol>
                      </CRow>
                      </div>
                      <p className="text-center"><b>Have you Enrolled with our Free Membership yet? Call us at:<br/> 1-888-548-2008 </b></p>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCol>
          <CCol md={12} className="mt-5">
            <CCard>
              <CCardBody>
              <CRow>
              <CChart
                type="bar" 
                data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
                datasets: [
                  {
                    backgroundColor: 'green',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                    label: 'Commisions',
                  },
                  {
                    backgroundColor: '#2d6db4',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                    label: 'Enrollments',
                  },
                ],
              }}
                labels="months"
                />
               </CRow>
              </CCardBody>
            </CCard>
            
          </CCol>
          {/* Line Chart  */}
          {/* <CCol md={6} className="mb-2">
            <CCardGroup>
              <CCard>
                
                <CCardBody>
                <CCardTitle>Users</CCardTitle>
                  <CChart
                    type="line"
                    data={{
                      
                      labels: ["January", "February", "March", "April", "May", "June", "July"],

                      datasets: [
                        {
                          label: "Affiliates",
                          backgroundColor: "rgba(220, 220, 220, 0.2)",
                          borderColor: "rgba(220, 220, 220, 1)",
                          pointBackgroundColor: "rgba(220, 220, 220, 1)",
                          pointBorderColor: "#fff",
                          data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                        },
                        {
                          label: "Affiliate Users",
                          backgroundColor: "rgba(151, 187, 205, 0.2)",
                          borderColor: "rgba(151, 187, 205, 1)",
                          pointBackgroundColor: "rgba(151, 187, 205, 1)",
                          pointBorderColor: "#fff",
                          data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol> */}

          {/*All AID with Bar Chart  */}
          {/* <CCol md={6} className="mb-2">
            <CCardGroup>
              <CCard>
                
                <CCardBody>
                <CCardTitle>Reference Affiliates</CCardTitle>
                  <CChart
                    type="line"
                    data={{
                      labels: ["April", "July"],
                      datasets: [
                        {
                          label: "Application Pending",
                          backgroundColor: "rgba(220, 220, 220, 0.2)",
                          borderColor: "rgba(220, 220, 220, 1)",
                          pointBackgroundColor: "rgba(220, 220, 220, 1)",
                          pointBorderColor: "#fff",
                          data: [40, 20],
                        },
                        {
                          label: "Approved Application",
                          backgroundColor: "rgba(151, 187, 205, 0.2)",
                          borderColor: "green",
                          pointBackgroundColor: "rgba(151, 187, 205, 1)",
                          pointBorderColor: "#fff",
                          data: [50, 12],
                        },
                        {
                          label: "Waiting For Approval",
                          backgroundColor: "rgba(151, 187, 205, 0.2)",
                          borderColor: "rgba(151, 187, 205, 1)",
                          pointBackgroundColor: "rgba(151, 187, 205, 1)",
                          pointBorderColor: "#fff",
                          data: [4, 12],
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol> */}

          {/* Company Affiliate and Affiliate Users with Doughnut Chart  */}
          {getUser().user_role==='admin'?
          <CCol md={6}>
            <CCardGroup>
              <CCard >
                <CCardBody>
                <CCardTitle>Company Affiliates and Affiliate Users</CCardTitle>
                <CRow>
                  <CCol md={7} >
                  <CChart
                    type="doughnut"
                    data={{
                      labels: ["Affiliate","Affiliate users"],
                      datasets: [
                        {
                          backgroundColor: [
                            "#E46651",
                            "#00D8FF",
                          ],
                          data: [companyAffiliateChart, companyAffiliateUsersChart],
                        },
                      ],
                    }}
                  />
                  </CCol>
                  <CCol md={5} className="pt-5">
                    <strong>Total Affiliates : </strong>{companyAffiliateChart}
                    <br/><br/>
                    <strong>Total Affiliate Users : </strong>{companyAffiliateUsersChart}
                  </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>:''}



          {/*All AID with Bar Chart  */}
          {/* <CCol md={6}  className="mb-2">
            <CCardGroup>
              <CCard>
                <CCardBody>
                <CCardTitle>AID Chart</CCardTitle>
                  <CChart
                    type="bar"
                    data={{
                      labels: [
                        "January",
                        "March"
                      ]
                      
                      ,
                      datasets: [
                        {
                          label: "AID Registered",
                          backgroundColor: "#f87979",
                          data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                        },
                      ],
                    }}
                    labels="months"
                  />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
   */}
        </CRow>
      </CContainer>
    </>
  );
}

export default index;
