import React from "react";

function Home() {
  return (
    <div className="container-fluid">
      <div className="jumbotron-main">
        <h1 className="about-heading">About our Project</h1>
      </div>
      <div className="content-1">
        <p className="about-desc">
          This project is a submission for Ease the Error 2.0 Hackathon
        </p>

        <h4 className="about-head">
          Team Members Details
        </h4>

        <p className="about-desc">
          The project was developed by:
          <ul>
            <li>
              Harisaran G 2nd Year IT - Sri Sivasubramaniya Nadar College of Engineering
            </li>
            <li>
              Sabesh Bharathi K 2nd Year IT - Sri Sivasubramaniya Nadar College of Engineering
            </li>
          </ul>
        </p>

        <h4 className="about-head">
          Project Abstract
        </h4>

        <p className="about-desc">
          This project aimed to deliver blazing fast search results, even on applying multiple search filters and tough queries. It makes the cumbersome process of searching, seamless and magical. It can be used to search through lakhs of records (in this case, over 2 Lakh records) within a fraction of a second. We wanted to provide the users with an innovative and super-fast way to search through properties, so we implemented geo search to enable users to search as they scroll on a map. This, combined with the robust filtering engine, our web app, is a powerful tool.

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
              Indexes lakhs of records
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
          </ul>
        </p>

        <h4 className="about-head">
          Hackathon Domain and Problem Statement
        </h4>

        <p className="about-desc">
          The hackathon domain is implementing a super-fast search portal for real estate.
          The problem statement is:
          House Search suggestions based on current configuration and available goods
        </p>

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
              Reactstrap - npm package
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

        <h4 className="about-head">
          Components not created at the hackathon
        </h4>

        <p className="about-desc">
          <ul>
            <li>
              Reusable CSS classes
            </li>
            <li>
              Reusable react-instantsearch elements
            </li>
            <li>
              EC2 server config files
            </li>
            <li>
              Predownloaded image assets
            </li>
          </ul>
        </p>


        <p className="about-note">
          NOTE: The web app is not responsive yet. So please do test it using your laptop/desktop devices.
        </p>

        <p className="about-youtube">
          <a href="https://www.youtube.com/watch?v=eQM2VgYQIlc">Youtube Link</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
