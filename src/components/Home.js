import React from "react";

function Home() {
  return (
    <div className="container-fluid">
      <div className="jumbotron-main">
        <h1 className="about-heading">About our Project</h1>
      </div>
      <div className="content-1">

        <div className="gif-bar">
          <div>
            <h4 className="about-head">
              Project Abstract
          </h4>
            <p className="about-desc project-abstract">
              This project aimed to deliver blazing fast search results, even on applying multiple search filters and tough queries. It makes the cumbersome process of searching, seamless and magical. It can be used to search through hundreds of thousands of records (in this case, over 200k records) within a fraction of a second. We wanted to provide the users with an innovative and super-fast way to search through properties, so we implemented geo search to enable users to search as they scroll on a map. This, combined with the robust filtering engine, our web app, is a powerful tool.

            <h6 className="about-head-mini">
                Features
            </h6>
              <ul>
                <li>
                  Geo Search
              </li>
                <li>
                  Powerful Facet Filtering
              </li>
                <li>
                  Search as you type
              </li><li>
                  Search as you scroll the map
              </li><li>
                  Typo Tolerant
              </li>
                <li>
                  Indexes upto 200k records
              </li>
              </ul>

              <h6 className="about-head-mini">
                Potential Features (in the future)
            </h6>
              <ul>
                <li>
                  User personalization
              </li>
                <li>
                  Suggestions based on current location
              </li>
                <li>
                  Scale up to millions of records
              </li><li>
                  Improving contact features
              </li>
                <li>
                  Making the web app responsive
              </li>
                <li>
                  Use search parameters like near me, within 5km radius
              </li>
              </ul>
            </p>
          </div>
          <img src="https://propertyportal.s3.ap-south-1.amazonaws.com/images/geosearch.gif" alt="gif" />
        </div>

        <h4 className="about-head">
          Tech Stack
        </h4>

        <p className="about-desc">
          <ul>
            <li>
              Typesense
            </li>
            <li>
              Typesense client + Instantsearch
            </li>
            <li>
              AWS DynamoDB
            </li>
            <li>
              AWS EC2
            </li>
            <li>
              AWS S3
            </li>
            <li>
              AWS Lambda
            </li>
            <li>
              ReactJS
            </li>
            <li>
              Kendo React Form
            </li>
            <li>
              Kendo React Icons
            </li>
            <li>
              Bootstrap
            </li>
          </ul>
        </p>

        <h4 className="about-head">
          SDKs and APIs used
        </h4>

        <p className="about-desc">
          <ul>
            <li>
              Docker
            </li>
            <li>
              Google Maps API
            </li>
            <li>
              Boto3 AWS SDK
            </li>
            <li>
              Faker - python library
            </li>
            <li>
              Kendo Utils
            </li>
            <li>
              AWS SNS
            </li>
            <li>
              React Instantsearch
            </li>
          </ul>
        </p>

        <h4 className="about-head">
          Assets used
        </h4>

        <p className="about-desc">
          <ul>
            <li>
              Free icons provided by flaticon
            </li>
            <li>
              Open source CSS libraries
            </li>
            <li>
              Neumorphic design schemes
            </li>
            <li>
              Custom designed buttons and favicons
            </li>
          </ul>
        </p>

        <div className="about-note">
          <p><b>NOTE:</b> The web app is not responsive yet. So please do test it using your laptop/desktop devices.</p>
        </div>

      </div>
    </div>
  );
}

export default Home;
