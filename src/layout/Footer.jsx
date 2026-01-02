// src/layout/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  // Donut math (r=68)
  const C = 427.26;
  const programs = 376.85; // 88.2%
  const admin = 8.97;      // 2.1%
  const fund = 41.44;      // 9.7%
  const offAdmin = -programs;           // start after programs
  const offFund = -(programs + admin);  // start after programs+admin = -385.82

  return (
    <footer className="hhpFooter">
      <div className="hhpFooterInner">
        {/* Left */}
        <section className="hhpFooterCol">
          <h3 className="hhpFooterHeading">How we use funds</h3>

          <div className="hhpDonutWrap" aria-label="How we use funds donut chart">
            <svg
              className="hhpDonut"
              width="260"
              height="260"
              viewBox="0 0 220 220"
              role="img"
              aria-label="88.2% Programs, 2.1% Administration, 9.7% Fundraising"
            >
              {/* Background */}
              <circle cx="110" cy="110" r="68" fill="none" stroke="#e9eef5" strokeWidth="26" />

              {/* Programs */}
              <circle
                cx="110"
                cy="110"
                r="68"
                fill="none"
                stroke="#1683ff"
                strokeWidth="26"
                strokeLinecap="butt"
                strokeDasharray={`${programs} ${C}`}
                strokeDashoffset="0"
                transform="rotate(-90 110 110)"
              />

              {/* Administration */}
              <circle
                cx="110"
                cy="110"
                r="68"
                fill="none"
                stroke="#8bc34a"
                strokeWidth="26"
                strokeLinecap="butt"
                strokeDasharray={`${admin} ${C}`}
                strokeDashoffset={offAdmin}
                transform="rotate(-90 110 110)"
              />

              {/* Fundraising */}
              <circle
                cx="110"
                cy="110"
                r="68"
                fill="none"
                stroke="#f4c400"
                strokeWidth="26"
                strokeLinecap="butt"
                strokeDasharray={`${fund} ${C}`}
                strokeDashoffset={offFund}
                transform="rotate(-90 110 110)"
              />

              {/* Center hole */}
              <circle cx="110" cy="110" r="48" fill="#ffffff" />

              {/* INSIDE-RING labels (white) */}
              {/* 88.2% on the blue ring */}
              <text
                x="174"
                y="130"
                textAnchor="middle"
                dominantBaseline="middle"
                className="hhpDonutPct"
              >
                88.2%
              </text>

              {/* 2.1% on green ring near top */}
              <text
                x="69"
                y="54"
                textAnchor="middle"
                dominantBaseline="middle"
                className="hhpDonutPct"
              >
                2.1%
              </text>

              {/* 9.7% on yellow ring left side */}
              <text
                x="90"
                y="40"
                textAnchor="middle"
                dominantBaseline="middle"
                className="hhpDonutPct"
              >
                9.7%
              </text>
            </svg>

            {/* Legend under donut */}

            <div className="hhpDonutLegend" aria-hidden="true">
              <div className="hhpFundsLine hhpFundsPrograms">
                <span className="hhpFundsPct">88.2%</span>
                <span className="hhpFundsLbl">Programs</span>
              </div>
              <div className="hhpFundsLine hhpFundsAdmin">
                <span className="hhpFundsPct">2.1%</span>
                <span className="hhpFundsLbl">Administration</span>
              </div>
              <div className="hhpFundsLine hhpFundsFundraising">
                <span className="hhpFundsPct">9.7%</span>
                <span className="hhpFundsLbl">Fundraising</span>
              </div>
            </div>
            
          </div>
        </section>

        <div className="hhpFooterDivider" aria-hidden="true" />

        {/* Middle */}
        <section className="hhpFooterCol">
          <h3 className="hhpFooterHeading">About</h3>

          <p className="hhpFooterText">
            Human Health Project is a Northern Ireland (UK) registered charity, a
            tax exempt 501(c)(3) Public Charity in the US and a Company Limited by
            Guarantee in the Republic of Ireland.
          </p>

          <p className="hhpFooterText">
            NI Charity No. 101323 | EIN: 71-0891805 | ROI Company No. 492908
          </p>

          <a
            className="hhpCandidLink"
            href="https://www.guidestar.org/profile/shared/794760e0-73b5-46e6-a96d-03293dea981d"
            target="_blank"
            rel="noreferrer"
            aria-label="Platinum Transparency 2024 on Candid"
          >
            <div className="hhpCandidBadge">
              <div className="hhpCandidBadgeInner">
                <div className="hhpCandidTop">Platinum</div>
                <div className="hhpCandidMid">Transparency</div>
                <div className="hhpCandidYear">2024</div>
                <div className="hhpCandidBottom">Candid.</div>
              </div>
            </div>
          </a>
        </section>

        <div className="hhpFooterDivider" aria-hidden="true" />

        {/* Right */}
        <section className="hhpFooterCol hhpFooterRight">
          <h3 className="hhpFooterHeading">Connect with us:</h3>

          <div className="hhpSocialRow">
            <a
              className="hhpSocialBtn hhpSocialFb"
              href="https://www.facebook.com/humanhealthproject"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              f
            </a>

            <a
              className="hhpSocialBtn hhpSocialX"
              href="https://x.com/HHPxUS"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              title="X"
            >
              X
            </a>

            <a
              className="hhpSocialBtn hhpSocialIg"
              href="https://www.instagram.com/humanhealthproject_us/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              ⌁
            </a>

            <a
              className="hhpSocialBtn hhpSocialIn"
              href="https://www.linkedin.com/company/hhp/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>
          </div>

          <h4 className="hhpFooterSubheading">Quick Links</h4>

          <nav className="hhpFooterLinks" aria-label="Footer quick links">
            <a className="hhpFooterLink" href="#" onClick={(e) => e.preventDefault()}>
              Contact Us
            </a>
            <a className="hhpFooterLink" href="#" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
            <a className="hhpFooterLink" href="#" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>

            <Link className="hhpFooterLink" to="/medical-disclaimer">
              Medical Disclaimer
            </Link>
            <Link className="hhpFooterLink" to="/how-to-help/intern">
              Intern With Us
            </Link>
          </nav>
        </section>
      </div>

      <div className="hhpFooterBottom">
        <p>© {year} Human Health Project. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
