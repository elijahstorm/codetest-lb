export const demoData = {
  id: '8104587c-e925-4cd6-85f8-22cd996e7d4d',
  name: 'Baremetrics',
  tagline: 'Tagline',
  description: null,
  URL: 'convertkit.baremetrics.com/',
  modeDesktopLight: true,
  modeDesktopDark: false,
  modeMobileLight: false,
  modeMobileDark: false,
  editions: {
    items: [
      {
        id: '00dc53ac-41ad-4edf-b62f-4f7059cabf80',
        name: 'Basic',
        description: 'Grow by knowing your Saas business in real-time.',
      },
      {
        id: 'c0b086ac-fe6b-4ee7-a13c-56fc2dad7db1',
        name: 'Professional',
        description: 'Automate recovery of failed payments',
      },
      {
        id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
        name: 'Business',
        description:
          'Learn why customers cancel and then automate emails to get them back.',
      },
      {
        id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
        name: 'Enterprise',
        description: 'Maximum growth with Recover and Cancellation Insights.',
      },
    ],
  },
  features: {
    items: [
      {
        id: '9c27d156-6cc2-4abc-b77d-50955e1d997e',
        name: 'Net Revenue',
        description:
          'Net revenue unlike MRR is money in your pocket. You can see how much money flowed into your business each day, minus any discounts.\n\nHow itâ€™s calculated\nGross Volume (Recurring and Non-recurring) - Refunds = Net Revenue',
        URL: 'stats/net-revenue',
        selector: '.metric-container__main',
        takeScreenshot: true,
        filename: 'netrevenue',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:31.657Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/netrevenue.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/netrevenue.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '71ccbe04-7b19-4823-9c21-1491c7e12410',
        name: 'Forecasting',
        description: 'Monthly Recurring Revenue',
        URL: 'forecast',
        selector: '.forecast--mrr',
        takeScreenshot: true,
        filename: 'forecasting',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:41.704Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/forecasting.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/forecasting.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '448b25c9-8ba8-4093-9169-77a2c72dacb9',
        name: 'Unresolved Charges',
        description:
          'Failed Charges are anytime your payment provider attempts a charge and it is not successful.',
        URL: 'stats/failed-charges',
        selector: '[data-v-76890e5a][data-v-1aa45582]',
        takeScreenshot: true,
        filename: 'unresolvedcharges',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:44.041Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/unresolvedcharges.png',
            filekeyStyled:
              'lbdemo/baremetrics/desktop/light/unresolvedcharges.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: 'a6d965c2-6c8c-4b6a-b458-1954263bb23b',
        name: 'Day of Downgrades',
        description:
          'Downgrades are folks who are still customers, but are for one reason or another paying you less money on a monthly basis. Many SaaS companies offer a discount for moving to an annual plan. Because the average monthly amount is lower, this is considered a downgrade (though in the grand scheme of things, a good thing).',
        URL: 'stats/downgrades',
        selector: '.aux_charts',
        takeScreenshot: true,
        filename: 'statsdowngrades',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:43.512Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/statsdowngrades.png',
            filekeyStyled:
              'lbdemo/baremetrics/desktop/light/statsdowngrades.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '00dc53ac-41ad-4edf-b62f-4f7059cabf80',
                name: 'Basic',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'c0b086ac-fe6b-4ee7-a13c-56fc2dad7db1',
                name: 'Professional',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: 'effd39c3-7848-40fa-bcf2-93006310e41c',
        name: 'Filtering options',
        description: 'Compare Dates, Trendlines and Annotations',
        URL: 'stats/active-subscriptions',
        selector: '.graph-toolbar',
        takeScreenshot: true,
        filename: 'filteringoptions',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:52.867Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/filteringoptions.png',
            filekeyStyled:
              'lbdemo/baremetrics/desktop/light/filteringoptions.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: 'be8fcc31-ca59-43d3-b013-4c488c4abc15',
        name: 'Live Stream',
        description: 'Live Stream Payments',
        URL: null,
        selector: '.control-center__livestream',
        takeScreenshot: true,
        filename: 'livestream',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:53.005Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/livestream.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/livestream.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '824b5750-7426-455d-8e7b-94d9a0fde616',
        name: 'Other Revenue',
        description:
          "Other Revenue Other Revenue is one-off charges - any payments that aren't attached to a subscription.",
        URL: 'stats/other-revenue',
        selector: '.metric-container__main',
        takeScreenshot: true,
        filename: 'otherrevenue',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:51.368Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/otherrevenue.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/otherrevenue.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: 'c0b086ac-fe6b-4ee7-a13c-56fc2dad7db1',
                name: 'Professional',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '3f7166d3-1b9a-4319-821d-0dbdd7863140',
        name: 'New Customers',
        description:
          'New Customers are customers going from free plan, a trial, or no plan, directly to a paid plan. This means that upgrades from free or trial to paid are considered to be a new customer.',
        URL: 'stats/new-customers',
        selector: '.aux_charts',
        takeScreenshot: true,
        filename: 'newcustomers',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:02.709Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/newcustomers.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/newcustomers.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '49fbcb17-12c2-4523-abc5-73c41589d8fa',
        name: 'Monthly MRR Growth',
        description:
          'Increases in MRR come from three places: new customers, returning customers, and upgrading customers. Conversely, you can lose MRR to cancellations and downgrades.',
        URL: 'stats/mrr',
        selector: '[data-v-76890e5a]',
        takeScreenshot: true,
        filename: 'monthlymrrgrowth',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:04.368Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/monthlymrrgrowth.png',
            filekeyStyled:
              'lbdemo/baremetrics/desktop/light/monthlymrrgrowth.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '00dc53ac-41ad-4edf-b62f-4f7059cabf80',
                name: 'Basic',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'c0b086ac-fe6b-4ee7-a13c-56fc2dad7db1',
                name: 'Professional',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '31baaee1-512f-47d3-99ce-8788adf4057f',
        name: 'Reactivated Customers',
        description:
          'Reactivations is when a new subscription is attached to a customer who has previously had and cancelled a subscription.',
        URL: 'stats/reactivations',
        selector: '.right-gradient',
        takeScreenshot: true,
        filename: 'reactivatedcustomers',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:05.377Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/reactivatedcustomers.png',
            filekeyStyled:
              'lbdemo/baremetrics/desktop/light/reactivatedcustomers.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '23a8b17a-d369-47dc-b3a0-fb39e46ab927',
        name: 'Plan Quantities',
        description:
          'Plan Quantities come into play if you support multiple subscriptions of a plan. This page outlines how many customers and subscriptions quantity',
        URL: 'stats/plan-quantities',
        selector: '.metric-stat',
        takeScreenshot: true,
        filename: 'planquantities',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:13.539Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/planquantities.png',
            filekeyStyled:
              'lbdemo/baremetrics/desktop/light/planquantities.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'c0b086ac-fe6b-4ee7-a13c-56fc2dad7db1',
                name: 'Professional',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '8e2c31ef-2843-4852-8817-3eab58730c0e',
        name: 'Customer retention',
        description:
          'The customer retention table or cohorts allows you to see when in their lifecycle customers are churning. Moving from left to right allows you to see what percentage of customers added in a particular month remain in subsequent months.',
        URL: 'stats/user-churn',
        selector: '.cohort_chart',
        takeScreenshot: true,
        filename: 'customerretention',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:13.571Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/customerretention.png',
            filekeyStyled:
              'lbdemo/baremetrics/desktop/light/customerretention.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: 'c0b086ac-fe6b-4ee7-a13c-56fc2dad7db1',
                name: 'Professional',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: 'd7f05b21-ee71-4464-bd75-bd9fab2d2212',
        name: 'Annual Run Rate',
        description:
          'Annual run rate or ARR is the current value of your business projected out over the next year. When you hear someone refer to a $10M business, theyâ€™re generally referring to ARR.',
        URL: 'stats/arr',
        selector: '.main-graph',
        takeScreenshot: true,
        filename: 'AnnualRunRate',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:29.553Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/AnnualRunRate.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/AnnualRunRate.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '00dc53ac-41ad-4edf-b62f-4f7059cabf80',
                name: 'Basic',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'c0b086ac-fe6b-4ee7-a13c-56fc2dad7db1',
                name: 'Professional',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '83214ec8-144e-400a-9f2b-aec08140c2cb',
        name: 'Forecasting Cashflow',
        description:
          'What you will bill the over the next 12 months and from how many customers, including a growth rate (3 month average)',
        URL: 'forecast',
        selector: '#cashflow',
        takeScreenshot: true,
        filename: 'forecastingcashflow',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:25.014Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/forecastingcashflow.png',
            filekeyStyled:
              'lbdemo/baremetrics/desktop/light/forecastingcashflow.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '3d933d63-1a70-42a3-8c36-150e3648c387',
        name: 'Revenue Churn',
        description:
          'Revenue churn is the percentage of MRR that has been lost in the last 30 days relative to your total MRR 30 days ago. Churn of any kind is bad, but a high revenue churn rate means that high value customers are leaving at a higher clip than others. You need to watch revenue churn like a hawk!\n\nHow itâ€™s calculated\n(MRR Lost to Downgrades & Cancellations in the last 30 days Ã· MRR 30 days ago) x 100',
        URL: 'stats/revenue-churn',
        selector: '.metric-container__main',
        takeScreenshot: true,
        filename: 'revenuechurn',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:27.148Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/revenuechurn.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/revenuechurn.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: 'd03289e5-429f-4a42-9fa3-20dd456dbbe6',
        name: 'At Risk Revenue',
        description:
          'Failed Charges are anytime your payment provider attempts a charge and it is not successful.',
        URL: 'stats/failed-charges',
        selector: '.main-graph',
        takeScreenshot: true,
        filename: 'atriskrevenue',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:37.511Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/atriskrevenue.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/atriskrevenue.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: 'b9564a10-341a-4494-9d9b-4308950a4cc3',
        name: 'Upgrades',
        description:
          'Upgrades are customers going from one paid plan to another more expensive paid plan.',
        URL: 'stats/upgrades',
        selector: '.aux_charts',
        takeScreenshot: true,
        filename: 'upgrades',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:41.723Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/upgrades.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/upgrades.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: 'e6d7e00a-1bf7-4278-9d2e-0e5247a1a07d',
        name: 'Fees',
        description:
          'The fees dashboard includes the fees from your payment provider.',
        URL: 'stats/fees',
        selector: '.metric-container__main',
        takeScreenshot: true,
        filename: 'fees',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:49.965Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/fees.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/fees.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '00dc53ac-41ad-4edf-b62f-4f7059cabf80',
                name: 'Basic',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: 'f96bda9d-f1ff-4b67-82b1-9bd11f382268',
        name: 'Benchmarks Lifetime Value',
        description:
          'Benchmarks is a feature for comparing how your company compares to other companies in your cohort.',
        URL: 'benchmarks',
        selector: '#ltv',
        takeScreenshot: true,
        filename: 'benchmarks',
        screenshots: [
          {
            status: 'processed',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:57:48.556Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/benchmarks.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/benchmarks.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '17b77899-7ef0-437c-aa2d-869fa043d81c',
                name: 'Enterprise',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '4740444e-f1e5-4bff-9794-3bfa3f643475',
        name: 'Refunds',
        description:
          "Refunds are a fact of life, but we don't expect them to be recurring, so we do not alter MRR. When entering a date range, it's refunds ISSUED in that range.",
        URL: 'stats/refunds',
        selector: '.graph',
        takeScreenshot: true,
        filename: 'refunds',
        screenshots: [
          {
            status: 'scheduled',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:24.367Z',
            filekeyRaw: 'lbdemo/baremetrics/raw/desktop/light/refunds.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/refunds.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: 'acad81c2-e991-452f-b324-abbae7cb36fe',
                name: 'Business',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
            {
              edition: {
                id: 'c0b086ac-fe6b-4ee7-a13c-56fc2dad7db1',
                name: 'Professional',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
      {
        id: '07d600bf-d6fe-438e-99fa-5cd0bec05470',
        name: 'Monthly growth',
        description:
          'Customers are your favorite people. They pay you money, and money is great! Not included in your customer count are folks on a free plan or free trial, have a 100% coupon, delinquent, or have paid you for a one off purchase but not a subscription.',
        URL: 'stats/active-customers',
        selector: '.temp-margin',
        takeScreenshot: true,
        filename: 'monthlygrowth',
        screenshots: [
          {
            status: 'scheduled',
            mode: 'modeDesktopLight',
            timeOfCapture: '2022-11-30T01:56:24.365Z',
            filekeyRaw:
              'lbdemo/baremetrics/raw/desktop/light/monthlygrowth.png',
            filekeyStyled: 'lbdemo/baremetrics/desktop/light/monthlygrowth.png',
            filesize: null,
          },
        ],
        FeatureEditions: {
          items: [
            {
              edition: {
                id: '00dc53ac-41ad-4edf-b62f-4f7059cabf80',
                name: 'Basic',
              },
              limit: null,
              limitType: null,
              constraint: null,
              constraintType: null,
              speed: null,
              speedType: null,
            },
          ],
        },
      },
    ],
  },
} as const
