// import express from "express";
// import puppeteer from "puppeteer";

// const port = 3000;
// const app = express();

// app.use(express.json());

// const htmlTemplate = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Business Analytics Dashboard</title>
//     <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
//     <style>
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         body {
//             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
//             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//             min-height: 100vh;
//             padding: 40px 20px;
//         }

//         .container {
//             max-width: 1400px;
//             margin: 0 auto;
//         }

//         h1 {
//             color: white;
//             text-align: center;
//             font-size: 3rem;
//             margin-bottom: 40px;
//             text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
//         }

//         .grid {
//             display: grid;
//             grid-template-columns: 1fr;
//             gap: 32px;
//         }

//         @media (min-width: 768px) {
//             .grid {
//                 grid-template-columns: repeat(2, 1fr);
//             }
//         }

//         .chart-card {
//             background: white;
//             border-radius: 16px;
//             padding: 24px;
//             box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//             border: 1px solid #f3f4f6;
//         }

//         .chart-card canvas {
//             max-height: 320px;
//         }

//         .chart-title {
//             font-size: 1.5rem;
//             font-weight: bold;
//             color: #1f2937;
//             margin-bottom: 16px;
//             display: flex;
//             align-items: center;
//         }

//         .chart-title span {
//             font-size: 2rem;
//             margin-right: 12px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1>📊 Business Analytics Dashboard</h1>
//         <div class="grid">
//             <!-- Revenue Analysis -->
//             <div class="chart-card">
//                 <h2 class="chart-title">
//                     <span>📈</span> Revenue Analysis
//                 </h2>
//                 <canvas id="revenueChart"></canvas>
//             </div>

//             <!-- Monthly Performance -->
//             <div class="chart-card">
//                 <h2 class="chart-title">
//                     <span>📊</span> Monthly Performance
//                 </h2>
//                 <canvas id="performanceChart"></canvas>
//             </div>

//             <!-- Product Categories -->
//             <div class="chart-card">
//                 <h2 class="chart-title">
//                     <span>🎯</span> Product Categories
//                 </h2>
//                 <canvas id="productChart"></canvas>
//             </div>

//             <!-- Growth Trend -->
//             <div class="chart-card">
//                 <h2 class="chart-title">
//                     <span>⚡</span> Growth Trend
//                 </h2>
//                 <canvas id="growthChart"></canvas>
//             </div>

//             <!-- Conversion Funnel -->
//             <div class="chart-card">
//                 <h2 class="chart-title">
//                     <span>🔻</span> Conversion Funnel
//                 </h2>
//                 <canvas id="funnelChart"></canvas>
//             </div>

//             <!-- Combined Metrics -->
//             <div class="chart-card">
//                 <h2 class="chart-title">
//                     <span>📉</span> Combined Metrics
//                 </h2>
//                 <canvas id="combinedChart"></canvas>
//             </div>
//         </div>
//     </div>

//     <script>
//         // Sample Data
//         const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
//         const revenue = [4000, 3000, 5000, 2780, 6890, 7390];
//         const expenses = [2400, 1398, 2800, 3908, 4800, 3800];
//         const profit = [1600, 1602, 2200, -1128, 2090, 3590];
//         const growth = [20, 25, 30, 15, 35, 40];

//         // Chart 1: Revenue Analysis (Multi-line)
//         new Chart(document.getElementById('revenueChart'), {
//             type: 'line',
//             data: {
//                 labels: months,
//                 datasets: [
//                     {
//                         label: 'Revenue',
//                         data: revenue,
//                         borderColor: '#8B5CF6',
//                         backgroundColor: '#8B5CF6',
//                         borderWidth: 3,
//                         tension: 0.4,
//                         pointRadius: 6
//                     },
//                     {
//                         label: 'Expenses',
//                         data: expenses,
//                         borderColor: '#EC4899',
//                         backgroundColor: '#EC4899',
//                         borderWidth: 3,
//                         tension: 0.4,
//                         pointRadius: 6
//                     },
//                     {
//                         label: 'Profit',
//                         data: profit,
//                         borderColor: '#10B981',
//                         backgroundColor: '#10B981',
//                         borderWidth: 3,
//                         tension: 0.4,
//                         pointRadius: 6
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: { position: 'top' }
//                 },
//                 scales: {
//                     y: { beginAtZero: true }
//                 }
//             }
//         });

//         // Chart 2: Monthly Performance (Stacked Bar)
//         new Chart(document.getElementById('performanceChart'), {
//             type: 'bar',
//             data: {
//                 labels: months,
//                 datasets: [
//                     {
//                         label: 'Revenue',
//                         data: revenue,
//                         backgroundColor: '#8B5CF6'
//                     },
//                     {
//                         label: 'Expenses',
//                         data: expenses,
//                         backgroundColor: '#EC4899'
//                     },
//                     {
//                         label: 'Profit',
//                         data: profit,
//                         backgroundColor: '#10B981'
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: { position: 'top' }
//                 },
//                 scales: {
//                     x: { stacked: true },
//                     y: { stacked: true, beginAtZero: true }
//                 }
//             }
//         });

//         // Chart 3: Product Categories (Doughnut)
//         new Chart(document.getElementById('productChart'), {
//             type: 'doughnut',
//             data: {
//                 labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Other'],
//                 datasets: [{
//                     data: [400, 300, 200, 150, 100],
//                     backgroundColor: ['#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#3B82F6'],
//                     borderWidth: 2,
//                     borderColor: '#fff'
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: { position: 'right' }
//                 }
//             }
//         });

//         // Chart 4: Growth Trend (Area)
//         new Chart(document.getElementById('growthChart'), {
//             type: 'line',
//             data: {
//                 labels: months,
//                 datasets: [
//                     {
//                         label: 'Revenue',
//                         data: revenue,
//                         borderColor: '#8B5CF6',
//                         backgroundColor: 'rgba(139, 92, 246, 0.3)',
//                         fill: true,
//                         tension: 0.4
//                     },
//                     {
//                         label: 'Profit',
//                         data: profit,
//                         borderColor: '#10B981',
//                         backgroundColor: 'rgba(16, 185, 129, 0.3)',
//                         fill: true,
//                         tension: 0.4
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: { position: 'top' }
//                 },
//                 scales: {
//                     y: { beginAtZero: true }
//                 }
//             }
//         });

//         // Chart 5: Conversion Funnel (Horizontal Bar)
//         new Chart(document.getElementById('funnelChart'), {
//             type: 'bar',
//             data: {
//                 labels: ['Website Visits', 'Product Views', 'Add to Cart', 'Checkout', 'Purchase'],
//                 datasets: [{
//                     label: 'Conversions',
//                     data: [10000, 7500, 5000, 2500, 1500],
//                     backgroundColor: ['#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE'],
//                     borderWidth: 0
//                 }]
//             },
//             options: {
//                 indexAxis: 'y',
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: { display: false }
//                 },
//                 scales: {
//                     x: { beginAtZero: true }
//                 }
//             }
//         });

//         // Chart 6: Combined Metrics (Mixed)
//         new Chart(document.getElementById('combinedChart'), {
//             type: 'bar',
//             data: {
//                 labels: months,
//                 datasets: [
//                     {
//                         type: 'bar',
//                         label: 'Revenue',
//                         data: revenue,
//                         backgroundColor: '#8B5CF6',
//                         order: 2
//                     },
//                     {
//                         type: 'line',
//                         label: 'Growth %',
//                         data: growth,
//                         borderColor: '#EF4444',
//                         backgroundColor: '#EF4444',
//                         borderWidth: 3,
//                         tension: 0.4,
//                         yAxisID: 'y1',
//                         order: 1
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: { position: 'top' }
//                 },
//                 scales: {
//                     y: {
//                         type: 'linear',
//                         position: 'left',
//                         beginAtZero: true
//                     },
//                     y1: {
//                         type: 'linear',
//                         position: 'right',
//                         beginAtZero: true,
//                         grid: {
//                             drawOnChartArea: false
//                         }
//                     }
//                 }
//             }
//         });

//          window.chartRendered = false;

//   setTimeout(() => {
//     window.chartRendered = true;
//   }, 1500);
//     </script>
// </body>
// </html>`;

// app.get("/health", (req, res) => {
//   console.log("Health checking");
//   res.json({
//     sucess: true,
//     message: "Health Ok",
//   });
// });

// app.post("/download/pdf", async (req, res) => {
//   try {
//     console.log("checking...1");
//     const browser = await puppeteer.launch({ headless: "new" });
//     console.log("checking...2");
//     const page = await browser.newPage();
//     console.log("checking...3");
//     await page.setContent(htmlTemplate, { waitUntil: "domcontentloaded" });

//     await page.waitForFunction(() => window.chartRendered === true);

//     console.log("checking...4");
//     const pdfBuffer = await page.pdf({
//       format: "A4",
//       printBackground: true,
//     });
//     console.log("checking...5");
//     await browser.close();
//     console.log("checking...6");

//     res.set({
//       "Content-Type": "application/pdf",
//       "Content-Length": pdfBuffer.length,
//     });
//     console.log("checking...7");
//     res.send(pdfBuffer);
//     console.log("checking...8");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error generating PDF", err);
//   }
// });

// app.listen(port, () => {
//   console.log("server running on " + port);
// });

import express from "express";
import puppeteer from "puppeteer";

const port = 3000;
const app = express();

app.use(express.json());

// Page pool for reusing pages
class PagePool {
  constructor(size = 3) {
    this.size = size;
    this.pool = [];
    this.browser = null;
  }

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: "new",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
        "--disable-software-rasterizer",
        "--disable-extensions",
        "--disable-background-networking",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-breakpad",
        "--disable-component-extensions-with-background-pages",
        "--disable-features=TranslateUI,BlinkGenPropertyTrees",
        "--disable-ipc-flooding-protection",
        "--disable-renderer-backgrounding",
        "--enable-features=NetworkService,NetworkServiceInProcess",
        "--force-color-profile=srgb",
        "--hide-scrollbars",
        "--metrics-recording-only",
        "--mute-audio",
      ],
    });

    // Pre-create pages
    for (let i = 0; i < this.size; i++) {
      const page = await this.browser.newPage();
      await page.setViewport({ width: 1400, height: 900 });
      await page.setJavaScriptEnabled(true);
      this.pool.push(page);
    }
  }

  async getPage() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    // If pool is empty, create a new page
    const page = await this.browser.newPage();
    await page.setViewport({ width: 1400, height: 900 });
    return page;
  }

  async releasePage(page) {
    // Clear the page content before returning to pool
    await page.goto("about:blank");
    if (this.pool.length < this.size) {
      this.pool.push(page);
    } else {
      await page.close();
    }
  }

  async close() {
    for (const page of this.pool) {
      await page.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }
}

const pagePool = new PagePool(3);

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Analytics Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        @page {
            size: A4;
            margin: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            width: 210mm; /* A4 width */
            margin: 0 auto;
            padding: 15mm 10mm;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }

        .container {
            max-width: 100%;
            margin: 0 auto;
        }

        h1 {
            color: white;
            text-align: center;
            font-size: 2.2rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            width: 100%;
        }

        .chart-card {
            background: white;
            border-radius: 12px;
            padding: 15px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            page-break-inside: avoid;
            /* Fixed height to prevent overflow */
            height: 280px;
            display: flex;
            flex-direction: column;
        }

        .chart-title {
            font-size: 1.1rem;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
        }

        .chart-title span {
            font-size: 1.3rem;
            margin-right: 8px;
        }

        .chart-container {
            flex: 1;
            position: relative;
            min-height: 0;
            overflow: hidden;
        }

        .chart-container canvas {
            width: 100% !important;
            height: 100% !important;
            max-height: 220px !important;
        }

        /* Ensure proper page breaks for PDF */
        .page-break {
            page-break-after: always;
        }

        /* Print-specific optimizations */
        @media print {
            body {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .chart-card {
                page-break-inside: avoid;
                break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📊 Business Analytics Dashboard</h1>
        <div class="grid">
            <div class="chart-card">
                <h2 class="chart-title"><span>📈</span> Revenue Analysis</h2>
                <div class="chart-container">
                    <canvas id="revenueChart"></canvas>
                </div>
            </div>
            <div class="chart-card">
                <h2 class="chart-title"><span>📊</span> Monthly Performance</h2>
                <div class="chart-container">
                    <canvas id="performanceChart"></canvas>
                </div>
            </div>
            <div class="chart-card">
                <h2 class="chart-title"><span>🎯</span> Product Categories</h2>
                <div class="chart-container">
                    <canvas id="productChart"></canvas>
                </div>
            </div>
            <div class="chart-card">
                <h2 class="chart-title"><span>⚡</span> Growth Trend</h2>
                <div class="chart-container">
                    <canvas id="growthChart"></canvas>
                </div>
            </div>
            <div class="chart-card">
                <h2 class="chart-title"><span>🔻</span> Conversion Funnel</h2>
                <div class="chart-container">
                    <canvas id="funnelChart"></canvas>
                </div>
            </div>
            <div class="chart-card">
                <h2 class="chart-title"><span>📉</span> Combined Metrics</h2>
                <div class="chart-container">
                    <canvas id="combinedChart"></canvas>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Disable all animations globally for performance
        Chart.defaults.animation = false;
        Chart.defaults.responsive = true;
        Chart.defaults.maintainAspectRatio = false;

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const revenue = [4000, 3000, 5000, 2780, 6890, 7390];
        const expenses = [2400, 1398, 2800, 3908, 4800, 3800];
        const profit = [1600, 1602, 2200, -1128, 2090, 3590];
        const growth = [20, 25, 30, 15, 35, 40];

        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            layout: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5
                }
            },
            plugins: { 
                legend: { 
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 8,
                        font: {
                            size: 10
                        }
                    }
                }
            }
        };

        // Chart 1: Revenue Analysis (Multi-line)
        new Chart(document.getElementById('revenueChart'), {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    { 
                        label: 'Revenue', 
                        data: revenue, 
                        borderColor: '#8B5CF6', 
                        backgroundColor: '#8B5CF6', 
                        borderWidth: 2, 
                        tension: 0.4, 
                        pointRadius: 4 
                    },
                    { 
                        label: 'Expenses', 
                        data: expenses, 
                        borderColor: '#EC4899', 
                        backgroundColor: '#EC4899', 
                        borderWidth: 2, 
                        tension: 0.4, 
                        pointRadius: 4 
                    },
                    { 
                        label: 'Profit', 
                        data: profit, 
                        borderColor: '#10B981', 
                        backgroundColor: '#10B981', 
                        borderWidth: 2, 
                        tension: 0.4, 
                        pointRadius: 4 
                    }
                ]
            },
            options: { 
                ...commonOptions, 
                scales: { 
                    y: { 
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    }
                } 
            }
        });

        // Chart 2: Monthly Performance (Stacked Bar)
        new Chart(document.getElementById('performanceChart'), {
            type: 'bar',
            data: {
                labels: months,
                datasets: [
                    { label: 'Revenue', data: revenue, backgroundColor: '#8B5CF6' },
                    { label: 'Expenses', data: expenses, backgroundColor: '#EC4899' },
                    { label: 'Profit', data: profit, backgroundColor: '#10B981' }
                ]
            },
            options: { 
                ...commonOptions, 
                scales: { 
                    x: { 
                        stacked: true,
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    }, 
                    y: { 
                        stacked: true, 
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    } 
                } 
            }
        });

        // Chart 3: Product Categories (Doughnut)
        new Chart(document.getElementById('productChart'), {
            type: 'doughnut',
            data: {
                labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Other'],
                datasets: [{
                    data: [400, 300, 200, 150, 100],
                    backgroundColor: ['#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#3B82F6'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: { 
                ...commonOptions, 
                plugins: { 
                    legend: { 
                        position: 'right',
                        labels: {
                            boxWidth: 12,
                            padding: 6,
                            font: {
                                size: 9
                            }
                        }
                    } 
                } 
            }
        });

        // Chart 4: Growth Trend (Area)
        new Chart(document.getElementById('growthChart'), {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    { 
                        label: 'Revenue', 
                        data: revenue, 
                        borderColor: '#8B5CF6', 
                        backgroundColor: 'rgba(139, 92, 246, 0.3)', 
                        fill: true, 
                        tension: 0.4,
                        borderWidth: 2
                    },
                    { 
                        label: 'Profit', 
                        data: profit, 
                        borderColor: '#10B981', 
                        backgroundColor: 'rgba(16, 185, 129, 0.3)', 
                        fill: true, 
                        tension: 0.4,
                        borderWidth: 2
                    }
                ]
            },
            options: { 
                ...commonOptions, 
                scales: { 
                    y: { 
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    }
                } 
            }
        });

        // Chart 5: Conversion Funnel (Horizontal Bar)
        new Chart(document.getElementById('funnelChart'), {
            type: 'bar',
            data: {
                labels: ['Website Visits', 'Product Views', 'Add to Cart', 'Checkout', 'Purchase'],
                datasets: [{
                    label: 'Conversions',
                    data: [10000, 7500, 5000, 2500, 1500],
                    backgroundColor: ['#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE'],
                    borderWidth: 0
                }]
            },
            options: { 
                indexAxis: 'y', 
                ...commonOptions, 
                plugins: { 
                    legend: { display: false } 
                }, 
                scales: { 
                    x: { 
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    }
                } 
            }
        });

        // Chart 6: Combined Metrics (Mixed)
        new Chart(document.getElementById('combinedChart'), {
            type: 'bar',
            data: {
                labels: months,
                datasets: [
                    { 
                        type: 'bar', 
                        label: 'Revenue', 
                        data: revenue, 
                        backgroundColor: '#8B5CF6', 
                        order: 2 
                    },
                    { 
                        type: 'line', 
                        label: 'Growth %', 
                        data: growth, 
                        borderColor: '#EF4444', 
                        backgroundColor: '#EF4444', 
                        borderWidth: 2, 
                        tension: 0.4, 
                        yAxisID: 'y1', 
                        order: 1,
                        pointRadius: 4
                    }
                ]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: { 
                        type: 'linear', 
                        position: 'left', 
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    },
                    y1: { 
                        type: 'linear', 
                        position: 'right', 
                        beginAtZero: true, 
                        grid: { 
                            drawOnChartArea: false 
                        },
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 9
                            }
                        }
                    }
                }
            }
        });

        // Signal that charts are rendered
        window.chartRendered = true;
    </script>
</body>
</html>`;

app.get("/health", (req, res) => {
  console.log("Health checking");
  res.json({
    success: true,
    message: "Health Ok",
  });
});

app.post("/download/pdf", async (req, res) => {
  let page = null;
  try {
    const startTime = Date.now();
    console.log("Starting PDF generation...");

    page = await pagePool.getPage();
    const loadStart = Date.now();

    await page.setContent(htmlTemplate, {
      waitUntil: "domcontentloaded",
      timeout: 10000,
    });
    console.log(`Content loaded in ${Date.now() - loadStart}ms`);

    const waitStart = Date.now();
    await page.waitForFunction(() => window.chartRendered === true, {
      timeout: 3000,
    });
    console.log(`Charts rendered in ${Date.now() - waitStart}ms`);

    const pdfStart = Date.now();
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: false,
      displayHeaderFooter: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log(`PDF generated in ${Date.now() - pdfStart}ms`);

    await pagePool.releasePage(page);

    const totalTime = Date.now() - startTime;
    console.log(`Total time: ${totalTime}ms`);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Length": pdfBuffer.length,
      "Content-Disposition": "attachment; filename=dashboard.pdf",
    });
    res.send(pdfBuffer);
  } catch (err) {
    console.error("Error generating PDF:", err);
    if (page) {
      await page.close();
    }
    res
      .status(500)
      .json({ error: "Error generating PDF", message: err.message });
  }
});

// Initialize page pool on startup
pagePool
  .initialize()
  .then(() => {
    console.log("Page pool initialized");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize page pool:", err);
    process.exit(1);
  });

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down gracefully...");
  await pagePool.close();
  process.exit(0);
});
