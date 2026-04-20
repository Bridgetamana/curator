import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.greeting}>
        <h1>Good Morning, Director</h1>
        <p>
          Your deep work block begins in 14 minutes. Focus on the Atelier
          Rebrand project today.
        </p>
      </div>

      <div className={styles.dashboardReport}>
        <div>
          <p>Velocity report</p>
          <div>
            <h2>Deep Work Momentum</h2>
            <p>82% of weekly objectives achieved</p>
          </div>
          <div></div>
        </div>
        <div>
          <p>Focus Time</p>
          <date>32.5hrs</date>
          <ul>
            <li>
              <p>Architecture</p>
              <p>12h</p>
            </li>
            <li>
              <p>Editorial Strategy</p>
              <p>14h</p>
            </li>
            <li>
              <p>Curation</p>
              <p>6.5h</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <div>
            <p>Active Projects</p>
            <button>View Ledger</button>
          </div>
          <ul>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                >
                  <path
                    fillRule="evenodd"
                    d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" />
                </svg>
              </div>
              <div>
                <p>Atelier Rebrand 2024</p>
                <p>High Intensity . Due in 4 days</p>
              </div>
              <div>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <span>in progress</span>
              </div>
            </li>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                >
                  <path
                    fillRule="evenodd"
                    d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" />
                </svg>
              </div>
              <div>
                <p>Digital Publication Q3</p>
                <p>Medium Intensity . Due in 12 days</p>
              </div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <span>planning</span>
              </div>
            </li>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                >
                  <path
                    fillRule="evenodd"
                    d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" />
                </svg>
              </div>
              <div>
                <p>Art Direction Guide</p>
                <p>Low Intensity . Internal</p>
              </div>
              <div>
                <span>review</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <p>Activity Log</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width={18}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
         <ul>
            <li>
                <span></span>
                <div>
                    <p>Julianne S. approved the Design Tokens draft.</p>
                    <p>24 minutes ago</p>
                </div>
            </li>
            <li>
                <span></span>
                <div>
                    <p>New focus session recorded: 3h 45m in Atelier Workspace.</p>
                    <p>2 Hours ago</p>
                </div>
            </li>
            <li>
                <span></span>
                <div>
                    <p>Liam W. commented on <a href="#">Task #102: Typography Scales.</a></p>
                    <p>yesterday</p>
                </div>
            </li>
            <li>
                <span></span>
                <div>
                    <p>Milestone reached: Brand identity v1.0 finalized</p>
                    <p>October 12</p>
                </div>
            </li>
         </ul>
          <button>Full Audit Trail</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
