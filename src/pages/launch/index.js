import Layout from "../../components/general/layout";
import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const { Panel } = Collapse;
const { TabPane } = Tabs;
export default function Launch() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div>
      <Layout title="BDTICKETS | Launch Ticket Booking">
        <h2>Terms And Conditions</h2>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                {/* <AppleOutlined /> */}
                bus
              </span>
            }
            key="1"
          >
            <Collapse defaultActiveKey={["1"]} ghost>
              <Panel header="Campaigns Terms & Conditions" key="1">
                {/* <p>{text}</p> */}
                <div class="faq-item-content">
              <h4 class="h6">Citybank Campaign 111</h4>
              <ol class="roman-list">
                <li> This offer is applicable for online channel only.</li>
                <li>Bdtickets is offering 5% cashback upto BDT 100 per transaction on minimum purchase BDT 1000 to all CBL AMEX cardmembers for AMEX special campaign in addition to all the deals and discounts applicable to all the products available on their app and website on both bdtickets.com. The maximum discount for the offer shall be up to BDT 500.</li>
                <li>The campaign duration will be 1st November, 2019 to 15th December, 2019.</li>
                <li>Cardmembers will pay the actual price of displayed products at the time of purchasing. The cash back will be provided to the Cardmembers account after the end of the campaign period.</li>
                <li> Card members can purchase any products (Air, Bus &amp; Launch Tickets) under this offer for anyone.VI. All CBL AMEX Card members including primary, supplementary, Corporate, AGORA AMEX and CitymaxX cardmembers are eligible for under this offer.</li>
                <li>The delivery, refund and exchange policy is as per <a href="https://bdtickets.com">bdtickets.com</a>  policy.</li>
              </ol>

              <h4 class="h6">Robi Dhonnobad Campaign</h4>
              <ol class="roman-list">
                <li> Only Robi users can avail this discount.</li>
                <li>One Robi user will be eligible for maximum 2 (two) discount on transactions during the campaign period.</li>
                <li>In each transaction customers can only avail 4 (four) seats.</li>
                <li> Campaign will be valid till September 30th 2019. Bdtickets holds the rights to stop or extend the campaign if necessary.</li>
                <li>The offer is valid only for the online payment ( customer has to buy from online site only).</li>
                <li>To avail the discount customer number has to be a Robi number but it is not necessary for the passengers to have a Robi number.</li>
              </ol>
            </div>
              </Panel>

              <Panel header="Special" key="2">
                <div class="faq-item-content">
                  <p>Important Terms for Eid</p>
                  <ol class="bullet-list">
                    <li>Eid time period will start upon declaration. Tickets cannot be cancelled /rescheduled during this time period</li>
                    <li>Bus authority has the right to cancel/delay any bus schedule due to any unwanted situations.</li>
                    <li>In case of bus cancellation from bus authority, customer will have to inform call center 16460 or email us at support@bdtickets.com within the next 24 hours from scheduled journey time. No complain will be received after the given time limit.</li>
                    <li>For any cancellation service charge will not be refunded.</li>
                    <li>Due to high demand during Eid season service charge might be higher than usual. Customers will have to purchase tickets by agreeing to the terms.</li>
                    <li>Ticket fares are managed by bus authority. Customers are advised to check fare before purchasing tickets. No complain regarding ticket price will be accepted after purchase.</li>
                  </ol>
                  <p>SMS or EMAIL ticket should not be forwarded to any other customers or friends. If forwarded, SMS or EMAIL tickets does not count by Service Providers, bdtickets will not be liable for this and no refund will be given.</p>
                </div>
              </Panel>
           
              <Panel header="Ticket Delivery mode" key="3">
                {/* <p>{text}</p> */}
                <div class="faq-item-content">
                  <p>The users who book their seats through us will be provided ticket in a way convenient to the user. As of now we allow ourusers to get tickets through SMS , Email or Printed Ticket. The users may get their tickets on their mobile phones. The messagehas complete information viz. ticket no, date of travel, seats booked, place of boarding &amp; destination, time of travel etc.The idea is to simply show the SMS received to ticket checker so that he confirms your details at his end. Our users also have the luxury of getting the tickets in their mentioned email account. This way once a seat is booked the ticket couldbe accessed from any device that connects to internet. For our users we also provide hard copies of the tickets. This willbe provided from registered Robi counters. You can get your seat booked at nearest Robi center. Seat is confirmed in print, and you receive that hard copy for future use. <br></br><br></br>

                  SMS or EMAIL ticket should not be forwarded to any other customers or friends. If forwarded, SMS or EMAIL tickets does not count by Service Providers, bdtickets will not be liable for this and no refund will be given.</p>
                </div>
              </Panel>

              <Panel header="Regarding Ticket Cancellation" key="4">
                {/* <p>{text}</p> */}
                <div class="faq-item-content">
                  <p>We provide ticketing services to book bus tickets for various bus operators and also serve the customer's travel needs across Bangladesh via Bus, Launch or Air.<br></br><br></br>

                  We are always available and people can connect us through the dedicated call center number – 16460 or visit our website: <a href="https://bdtickets.com">bdtickets.com</a> or our valued customers can write to us at <a href="mailto:support@bdtickets.com.">support@bdtickets.com.</a><br></br><br></br>
                  
                  Our services are available on any device that connects to the internet and can have voice call support to call our call center number.<br></br><br></br>
                  
                  Apart from online booking via internet, we also confirm seats on per call basis, full bus reservations, special seat reservations for guaranteed travel, exclusive online seats etc. We are looking forward to introduce more services for our valued customers. To know more you can find further details on our “Contact us” page.<br></br><br></br>
                  
                  <a href="https://bdtickets.com">bdtickets.com</a> is very strict if anyone carries any illegal packages. <a href="https://bdtickets.com">bdtickets.com</a> is never responsible for any un-declared luggage that is not legal and/or dangerous for other customers or passengers.</p>
                </div>
              </Panel>

            </Collapse>
          </TabPane>
          <TabPane
            tab={
              <span>
                {/* <AndroidOutlined /> */}
                launch
              </span>
            }
            key="2"
          >
             <Collapse defaultActiveKey={["1"]} ghost>

              <Panel header="Regarding Ticket Cancellation" key="4">
                {/* <p>{text}</p> */}
                <div class="faq-item-content">
                  <p>We provide ticketing services to book bus tickets for various bus operators and also serve the customer's travel needs across Bangladesh via Bus, Launch or Air.<br></br><br></br>

                  We are always available and people can connect us through the dedicated call center number – 16460 or visit our website: <a href="https://bdtickets.com">bdtickets.com</a> or our valued customers can write to us at <a href="mailto:support@bdtickets.com.">support@bdtickets.com.</a><br></br><br></br>
                  
                  Our services are available on any device that connects to the internet and can have voice call support to call our call center number.<br></br><br></br>
                  
                  Apart from online booking via internet, we also confirm seats on per call basis, full bus reservations, special seat reservations for guaranteed travel, exclusive online seats etc. We are looking forward to introduce more services for our valued customers. To know more you can find further details on our “Contact us” page.<br></br><br></br>
                  
                  <a href="https://bdtickets.com">bdtickets.com</a> is very strict if anyone carries any illegal packages. <a href="https://bdtickets.com">bdtickets.com</a> is never responsible for any un-declared luggage that is not legal and/or dangerous for other customers or passengers.</p>
                </div>
              </Panel>

            </Collapse>
          </TabPane>
        </Tabs>
      </Layout>
    </div>
  );
}
