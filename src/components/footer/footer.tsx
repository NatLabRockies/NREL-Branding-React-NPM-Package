import * as React from 'react';
import * as PropTypes from 'prop-types';

import {
  facebook,
  instagram,
  linkedin,
  twitter,
  threads,
  youtube,
  AllianceLogo,
  DoeLogo,
} from './images';

import './style.scss';

NRELFooter.propTypes = {
  className: PropTypes.string,
  contact: PropTypes.string,
};

export type INRELFooterProps = {
  className?: string;
  contact?: string;
};

/**
 * Renders a comms friendly footer
 * See https://github.com/NatLabRockies/nrel-app-template-bootstrap4 for original code
 */
function NRELFooter({ className = "", contact }: INRELFooterProps) {
  const contactUrl = contact ? contact : "mailto:maps.help@nlr.gov";

  return (
    <div className={`nrel-footer-wrapper ${className}`}>
      <footer id="footer" className="hidden-print">
        <div className="footertop">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5">
                <a href="https://www.nlr.gov/">
                  <strong>National Laboratory of the Rockies</strong>
                </a>
              </div>
              <div className="col col-lg-7">
                <div className="d-flex flex-column flex-lg-row justify-content-lg-start global">
                  <div>
                    <a href="https://www.nlr.gov/about">About</a>
                  </div>
                  <div>
                    <a href="https://www.nlr.gov/research">Research</a>
                  </div>
                  <div>
                    <a href="https://www.nlr.gov/workingwithus">Work with Us</a>
                  </div>
                  <div>
                    <a href="https://www.nlr.gov/news">News</a>
                  </div>
                  <div>
                    <a href="https://www.nlr.gov/careers">Careers</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbottom">
          <div className="container">
            <div className="row social-and-global-links">
              <div className="col-md-4 col-lg-5">
                <div>
                  <a href={contactUrl}>Contact Us</a>
                </div>
                <div className="mt-2">
                  <a href="https://www.nlr.gov/about/visiting-nlr">Visit</a>
                </div>
                <div className="mt-2">
                  <a href="https://www.nlr.gov/news/subscribe">Subscribe</a>
                </div>
                <div className="mt-3">
                  <ul className="social-links list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/nationalrenewableenergylab"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow NRL on Facebook"
                      >
                        <img
                          aria-hidden
                          className="social-svg"
                          src={facebook}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/nationalrenewableenergylab/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow NRL on Instagram"
                      >
                        <img
                          aria-hidden
                          className="social-svg"
                          src={instagram}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/company/national-lab-of-the-rockies"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow NRL on Linked In"
                      >
                        <img
                          aria-hidden
                          className="social-svg"
                          src={linkedin}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.youtube.com/@nationallaboratoryoftherockies"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow NRL on YouTube"
                      >
                        <img aria-hidden className="social-svg" src={youtube} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://x.com/natlabrockies"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow NRL on X"
                      >
                        <img
                          aria-hidden
                          className="social-svg social-svg__twitter"
                          src={twitter}
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.threads.net/@nationalrenewableenergylab"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Follow NRL on Threads"
                      >
                        <img
                          aria-hidden
                          className="social-svg social-svg__threads"
                          src={threads}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 col-lg-7 globalsecondary">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="mt-1">
                      <a href="https://www.nlr.gov/accessibility">
                        Accessibility
                      </a>
                    </div>
                    <div className="mt-1">
                      <a href="https://www.nlr.gov/disclaimer">Disclaimer</a>
                    </div>
                    <div className="mt-1">
                      <a href="https://www.nlr.gov/security">
                        Security and Privacy
                      </a>
                    </div>
                    <div className="mt-1">
                      <a href="https://www.nlr.gov/webmaster">Site Feedback</a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="mt-1">
                      <a href="https://developer.nlr.gov/">Developers</a>
                    </div>
                    <div className="mt-1">
                      <a href="https://thesource.nrel.gov/">Employees</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-4">
              <div className="row">
                <div className="col-sm-6 nrel-footer-logos-container">
                  <a href="https://www.alliance-for-energy-innovation.org">
                    <img
                      className="mr-5 nrel-alliance-logo alliance-logo"
                      src={AllianceLogo}
                      alt="Alliance for Energy Innovation, LLC"
                    />
                  </a>
                  <a href="https://www.energy.gov">
                    <DoeLogo className="nrel-doe-logo doe-logo" />
                  </a>
                </div>
                <div className="col-12 col-sm-6">
                  <p className="nrel-attr">
                    The National Laboratory of the Rockies is a national
                    laboratory of the U.S. Department of Energy, Office of
                    Critical Minerals and Energy Innovation, operated under
                    Contract No. DE-AC36-08GO28308.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NRELFooter;
