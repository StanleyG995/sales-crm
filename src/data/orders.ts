import type { OrderProps } from "../data/Order.type"

export const ordersData: OrderProps[] = [

  {
    id: 1,
    invoiceNumber: "INV-2024-00001",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2024-11-14",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 4, name: "Wireless Mouse", quantity: 4, price: 220, total: 880 }
    ],
    total: 6280
  },

  {
    id: 2,
    invoiceNumber: "INV-2024-00002",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-03-19",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 3,
    invoiceNumber: "INV-2024-00003",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-09-22",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }, { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }
    ],
    total: 4800
  },

  {
    id: 4,
    invoiceNumber: "INV-2024-00004",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-11-11",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }, { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 1260
  },

  {
    id: 5,
    invoiceNumber: "INV-2024-00005",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2023-09-22",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }
    ],
    total: 600
  },

  {
    id: 6,
    invoiceNumber: "INV-2024-00006",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2023-02-01",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 4, price: 220, total: 880 }
    ],
    total: 880
  },

  {
    id: 7,
    invoiceNumber: "INV-2024-00007",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-02-29",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }, { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }, { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }
    ],
    total: 14200
  },

  {
    id: 8,
    invoiceNumber: "INV-2024-00008",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2023-06-18",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 3, price: 450, total: 1350 }
    ],
    total: 1350
  },

  {
    id: 9,
    invoiceNumber: "INV-2024-00009",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2025-05-15",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }, { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }, { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }
    ],
    total: 9750
  },

  {
    id: 10,
    invoiceNumber: "INV-2024-00010",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2024-09-16",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }
    ],
    total: 19500
  },

  {
    id: 11,
    invoiceNumber: "INV-2024-00011",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2023-01-18",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }, { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }
    ],
    total: 1260
  },

  {
    id: 12,
    invoiceNumber: "INV-2024-00012",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2023-06-03",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "negotiation",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 4, price: 600, total: 2400 }
    ],
    total: 2400
  },

  {
    id: 13,
    invoiceNumber: "INV-2024-00013",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-03-13",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }, { id: 3, name: "Keyboard Mechanical", quantity: 3, price: 450, total: 1350 }, { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }
    ],
    total: 7650
  },

  {
    id: 14,
    invoiceNumber: "INV-2024-00014",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-01-05",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }, { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }, { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }
    ],
    total: 2550
  },

  {
    id: 15,
    invoiceNumber: "INV-2024-00015",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2024-10-12",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }
    ],
    total: 4800
  },

  {
    id: 16,
    invoiceNumber: "INV-2024-00016",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-03-20",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }, { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }
    ],
    total: 8300
  },

  {
    id: 17,
    invoiceNumber: "INV-2024-00017",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2025-09-30",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }
    ],
    total: 7200
  },

  {
    id: 18,
    invoiceNumber: "INV-2024-00018",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-06-23",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }
    ],
    total: 2700
  },

  {
    id: 19,
    invoiceNumber: "INV-2024-00019",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2023-01-25",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }
    ],
    total: 3600
  },

  {
    id: 20,
    invoiceNumber: "INV-2024-00020",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-12-22",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 21,
    invoiceNumber: "INV-2024-00021",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-09-27",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 5, price: 1800, total: 9000 }, { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }
    ],
    total: 9900
  },

  {
    id: 22,
    invoiceNumber: "INV-2024-00022",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2024-06-13",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 3, price: 450, total: 1350 }, { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }
    ],
    total: 8550
  },

  {
    id: 23,
    invoiceNumber: "INV-2024-00023",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2023-06-09",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }, { id: 4, name: "Wireless Mouse", quantity: 4, price: 220, total: 880 }
    ],
    total: 2680
  },

  {
    id: 24,
    invoiceNumber: "INV-2024-00024",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-08-07",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 25,
    invoiceNumber: "INV-2024-00025",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-08-31",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }
    ],
    total: 5400
  },

  {
    id: 26,
    invoiceNumber: "INV-2024-00026",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2023-04-12",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 5, price: 1800, total: 9000 }, { id: 4, name: "Wireless Mouse", quantity: 1, price: 220, total: 220 }, { id: 6, name: "Office Chair", quantity: 5, price: 1200, total: 6000 }
    ],
    total: 15220
  },

  {
    id: 27,
    invoiceNumber: "INV-2024-00027",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2024-12-02",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 28,
    invoiceNumber: "INV-2024-00028",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-04-21",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }
    ],
    total: 1200
  },

  {
    id: 29,
    invoiceNumber: "INV-2024-00029",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-06-29",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }
    ],
    total: 3440
  },

  {
    id: 30,
    invoiceNumber: "INV-2024-00030",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-01-13",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }, { id: 6, name: "Office Chair", quantity: 2, price: 1200, total: 2400 }
    ],
    total: 3300
  },

  {
    id: 31,
    invoiceNumber: "INV-2024-00031",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-08-23",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 4, name: "Wireless Mouse", quantity: 5, price: 220, total: 1100 }
    ],
    total: 6500
  },

  {
    id: 32,
    invoiceNumber: "INV-2024-00032",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-05-11",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }, { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }, { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }
    ],
    total: 12600
  },

  {
    id: 33,
    invoiceNumber: "INV-2024-00033",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-08-30",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }
    ],
    total: 900
  },

  {
    id: 34,
    invoiceNumber: "INV-2024-00034",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-12-12",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 3, price: 450, total: 1350 }, { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }, { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }
    ],
    total: 8850
  },

  {
    id: 35,
    invoiceNumber: "INV-2024-00035",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2024-06-20",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }, { id: 4, name: "Wireless Mouse", quantity: 4, price: 220, total: 880 }, { id: 6, name: "Office Chair", quantity: 5, price: 1200, total: 6000 }
    ],
    total: 9130
  },

  {
    id: 36,
    invoiceNumber: "INV-2024-00036",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2023-11-25",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }
    ],
    total: 7490
  },

  {
    id: 37,
    invoiceNumber: "INV-2024-00037",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-08-28",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }
    ],
    total: 12900
  },

  {
    id: 38,
    invoiceNumber: "INV-2024-00038",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-10-14",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 5, price: 220, total: 1100 }, { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }
    ],
    total: 1400
  },

  {
    id: 39,
    invoiceNumber: "INV-2024-00039",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-04-05",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 2, price: 1200, total: 2400 }, { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }, { id: 8, name: "External SSD 1TB", quantity: 1, price: 600, total: 600 }
    ],
    total: 7500
  },

  {
    id: 40,
    invoiceNumber: "INV-2024-00040",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2024-12-06",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 5, price: 6500, total: 32500 }, { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }
    ],
    total: 36100
  },

  {
    id: 41,
    invoiceNumber: "INV-2024-00041",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2024-09-26",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "negotiation",
    products: [
      { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }
    ],
    total: 26100
  },

  {
    id: 42,
    invoiceNumber: "INV-2024-00042",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2023-03-03",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }
    ],
    total: 1200
  },

  {
    id: 43,
    invoiceNumber: "INV-2024-00043",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-05-20",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 4, price: 600, total: 2400 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }
    ],
    total: 14300
  },

  {
    id: 44,
    invoiceNumber: "INV-2024-00044",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-11-11",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 3, price: 450, total: 1350 }
    ],
    total: 1350
  },

  {
    id: 45,
    invoiceNumber: "INV-2024-00045",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2023-11-11",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 46,
    invoiceNumber: "INV-2024-00046",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2024-12-20",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 47,
    invoiceNumber: "INV-2024-00047",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-11-22",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }, { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }
    ],
    total: 2400
  },

  {
    id: 48,
    invoiceNumber: "INV-2024-00048",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-03-17",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }
    ],
    total: 6300
  },

  {
    id: 49,
    invoiceNumber: "INV-2024-00049",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2023-03-14",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }, { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }
    ],
    total: 7500
  },

  {
    id: 50,
    invoiceNumber: "INV-2024-00050",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2025-12-30",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }, { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }, { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }
    ],
    total: 11450
  },

  {
    id: 51,
    invoiceNumber: "INV-2024-00051",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2024-04-17",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }, { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }, { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }
    ],
    total: 29450
  },

  {
    id: 52,
    invoiceNumber: "INV-2024-00052",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2023-06-12",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "lead",
    products: [
      { id: 6, name: "Office Chair", quantity: 2, price: 1200, total: 2400 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }
    ],
    total: 2840
  },

  {
    id: 53,
    invoiceNumber: "INV-2024-00053",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-01-23",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }, { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }
    ],
    total: 11100
  },

  {
    id: 54,
    invoiceNumber: "INV-2024-00054",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2023-05-09",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }
    ],
    total: 440
  },

  {
    id: 55,
    invoiceNumber: "INV-2024-00055",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2024-05-31",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "negotiation",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }, { id: 4, name: "Wireless Mouse", quantity: 1, price: 220, total: 220 }
    ],
    total: 3820
  },

  {
    id: 56,
    invoiceNumber: "INV-2024-00056",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-01-07",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 57,
    invoiceNumber: "INV-2024-00057",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2024-04-17",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }
    ],
    total: 1790
  },

  {
    id: 58,
    invoiceNumber: "INV-2024-00058",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-03-01",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }
    ],
    total: 2250
  },

  {
    id: 59,
    invoiceNumber: "INV-2024-00059",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2025-04-16",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }, { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }, { id: 8, name: "External SSD 1TB", quantity: 4, price: 600, total: 2400 }
    ],
    total: 7800
  },

  {
    id: 60,
    invoiceNumber: "INV-2024-00060",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-08-05",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }, { id: 6, name: "Office Chair", quantity: 5, price: 1200, total: 6000 }, { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }
    ],
    total: 7350
  },

  {
    id: 61,
    invoiceNumber: "INV-2024-00061",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2024-07-28",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 8, name: "External SSD 1TB", quantity: 4, price: 600, total: 2400 }
    ],
    total: 4200
  },

  {
    id: 62,
    invoiceNumber: "INV-2024-00062",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-01-14",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "lead",
    products: [
      { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }, { id: 4, name: "Wireless Mouse", quantity: 1, price: 220, total: 220 }
    ],
    total: 2020
  },

  {
    id: 63,
    invoiceNumber: "INV-2024-00063",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2025-04-27",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }
    ],
    total: 21300
  },

  {
    id: 64,
    invoiceNumber: "INV-2024-00064",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2025-11-28",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "negotiation",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }
    ],
    total: 450
  },

  {
    id: 65,
    invoiceNumber: "INV-2024-00065",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-03-31",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }
    ],
    total: 24900
  },

  {
    id: 66,
    invoiceNumber: "INV-2024-00066",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-09-30",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }
    ],
    total: 750
  },

  {
    id: 67,
    invoiceNumber: "INV-2024-00067",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2024-02-19",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }
    ],
    total: 440
  },

  {
    id: 68,
    invoiceNumber: "INV-2024-00068",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2024-12-29",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 1, name: "Laptop Pro 14", quantity: 5, price: 6500, total: 32500 }
    ],
    total: 40600
  },

  {
    id: 69,
    invoiceNumber: "INV-2024-00069",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-03-08",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 1, price: 600, total: 600 }, { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }, { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }
    ],
    total: 9600
  },

  {
    id: 70,
    invoiceNumber: "INV-2024-00070",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2024-11-06",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "lead",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }
    ],
    total: 6500
  },

  {
    id: 71,
    invoiceNumber: "INV-2024-00071",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2024-08-07",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }, { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }
    ],
    total: 9500
  },

  {
    id: 72,
    invoiceNumber: "INV-2024-00072",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-02-15",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }
    ],
    total: 24300
  },

  {
    id: 73,
    invoiceNumber: "INV-2024-00073",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-12-02",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }, { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }
    ],
    total: 16000
  },

  {
    id: 74,
    invoiceNumber: "INV-2024-00074",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-04-29",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }, { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }
    ],
    total: 7350
  },

  {
    id: 75,
    invoiceNumber: "INV-2024-00075",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2025-10-22",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "negotiation",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 76,
    invoiceNumber: "INV-2024-00076",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-02-01",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }
    ],
    total: 8100
  },

  {
    id: 77,
    invoiceNumber: "INV-2024-00077",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2025-04-15",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "negotiation",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }
    ],
    total: 750
  },

  {
    id: 78,
    invoiceNumber: "INV-2024-00078",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-05-25",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }, { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }, { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }
    ],
    total: 25800
  },

  {
    id: 79,
    invoiceNumber: "INV-2024-00079",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-01-19",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 80,
    invoiceNumber: "INV-2024-00080",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2025-01-02",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }, { id: 1, name: "Laptop Pro 14", quantity: 5, price: 6500, total: 32500 }, { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 33550
  },

  {
    id: 81,
    invoiceNumber: "INV-2024-00081",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-03-30",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 5, price: 6500, total: 32500 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }
    ],
    total: 32650
  },

  {
    id: 82,
    invoiceNumber: "INV-2024-00082",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2024-05-27",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }
    ],
    total: 26000
  },

  {
    id: 83,
    invoiceNumber: "INV-2024-00083",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2025-11-15",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }
    ],
    total: 3600
  },

  {
    id: 84,
    invoiceNumber: "INV-2024-00084",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2023-03-21",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 1, price: 220, total: 220 }
    ],
    total: 220
  },

  {
    id: 85,
    invoiceNumber: "INV-2024-00085",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-11-26",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 1, price: 600, total: 600 }, { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }
    ],
    total: 3300
  },

  {
    id: 86,
    invoiceNumber: "INV-2024-00086",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-07-27",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }
    ],
    total: 28500
  },

  {
    id: 87,
    invoiceNumber: "INV-2024-00087",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-05-10",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }, { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }, { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }
    ],
    total: 17800
  },

  {
    id: 88,
    invoiceNumber: "INV-2024-00088",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-03-14",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 6, name: "Office Chair", quantity: 5, price: 1200, total: 6000 }
    ],
    total: 7800
  },

  {
    id: 89,
    invoiceNumber: "INV-2024-00089",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-05-10",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }, { id: 8, name: "External SSD 1TB", quantity: 1, price: 600, total: 600 }
    ],
    total: 5250
  },

  {
    id: 90,
    invoiceNumber: "INV-2024-00090",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2023-04-07",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }
    ],
    total: 660
  },

  {
    id: 91,
    invoiceNumber: "INV-2024-00091",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-07-20",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }
    ],
    total: 4500
  },

  {
    id: 92,
    invoiceNumber: "INV-2024-00092",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2023-08-23",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }, { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 4050
  },

  {
    id: 93,
    invoiceNumber: "INV-2024-00093",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2023-10-11",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 94,
    invoiceNumber: "INV-2024-00094",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2025-11-15",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }
    ],
    total: 26000
  },

  {
    id: 95,
    invoiceNumber: "INV-2024-00095",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-09-25",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 5, price: 220, total: 1100 }
    ],
    total: 1100
  },

  {
    id: 96,
    invoiceNumber: "INV-2024-00096",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-02-29",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }
    ],
    total: 2690
  },

  {
    id: 97,
    invoiceNumber: "INV-2024-00097",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2024-01-28",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }, { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }
    ],
    total: 4260
  },

  {
    id: 98,
    invoiceNumber: "INV-2024-00098",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-06-28",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }, { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }
    ],
    total: 6600
  },

  {
    id: 99,
    invoiceNumber: "INV-2024-00099",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-01-20",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 6, name: "Office Chair", quantity: 2, price: 1200, total: 2400 }
    ],
    total: 2400
  },

  {
    id: 100,
    invoiceNumber: "INV-2024-00100",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2023-03-18",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "negotiation",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 5, price: 1800, total: 9000 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }, { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }
    ],
    total: 11400
  },

  {
    id: 101,
    invoiceNumber: "INV-2024-00101",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-12-29",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }, { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }
    ],
    total: 21900
  },

  {
    id: 102,
    invoiceNumber: "INV-2024-00102",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2023-07-30",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }, { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }, { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }
    ],
    total: 5850
  },

  {
    id: 103,
    invoiceNumber: "INV-2024-00103",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-10-08",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }, { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 1050
  },

  {
    id: 104,
    invoiceNumber: "INV-2024-00104",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-10-31",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }, { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }
    ],
    total: 20400
  },

  {
    id: 105,
    invoiceNumber: "INV-2024-00105",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2024-05-30",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }, { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }, { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 4350
  },

  {
    id: 106,
    invoiceNumber: "INV-2024-00106",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-03-28",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 450
  },

  {
    id: 107,
    invoiceNumber: "INV-2024-00107",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-12-08",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }, { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }, { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }
    ],
    total: 16900
  },

  {
    id: 108,
    invoiceNumber: "INV-2024-00108",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-12-19",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }
    ],
    total: 300
  },

  {
    id: 109,
    invoiceNumber: "INV-2024-00109",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2024-05-17",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }, { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }
    ],
    total: 21300
  },

  {
    id: 110,
    invoiceNumber: "INV-2024-00110",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-11-25",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }
    ],
    total: 7200
  },

  {
    id: 111,
    invoiceNumber: "INV-2024-00111",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2025-04-07",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "negotiation",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 5, price: 1800, total: 9000 }, { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }
    ],
    total: 10200
  },

  {
    id: 112,
    invoiceNumber: "INV-2024-00112",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-09-27",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 5, price: 6500, total: 32500 }
    ],
    total: 32500
  },

  {
    id: 113,
    invoiceNumber: "INV-2024-00113",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2023-08-06",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }, { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }, { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }
    ],
    total: 12000
  },

  {
    id: 114,
    invoiceNumber: "INV-2024-00114",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-07-08",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }, { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }
    ],
    total: 36200
  },

  {
    id: 115,
    invoiceNumber: "INV-2024-00115",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2025-04-04",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 450
  },

  {
    id: 116,
    invoiceNumber: "INV-2024-00116",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-04-26",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }, { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }
    ],
    total: 26750
  },

  {
    id: 117,
    invoiceNumber: "INV-2024-00117",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2025-12-02",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }
    ],
    total: 3000
  },

  {
    id: 118,
    invoiceNumber: "INV-2024-00118",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2025-07-25",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }, { id: 2, name: "Monitor 27'' 4K", quantity: 5, price: 1800, total: 9000 }
    ],
    total: 15500
  },

  {
    id: 119,
    invoiceNumber: "INV-2024-00119",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-08-02",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }, { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }
    ],
    total: 4350
  },

  {
    id: 120,
    invoiceNumber: "INV-2024-00120",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2025-12-19",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }
    ],
    total: 30040
  },

  {
    id: 121,
    invoiceNumber: "INV-2024-00121",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2024-03-14",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }, { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }
    ],
    total: 6750
  },

  {
    id: 122,
    invoiceNumber: "INV-2024-00122",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-08-09",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }
    ],
    total: 3140
  },

  {
    id: 123,
    invoiceNumber: "INV-2024-00123",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-12-17",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }
    ],
    total: 20250
  },

  {
    id: 124,
    invoiceNumber: "INV-2024-00124",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2024-10-22",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }, { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }
    ],
    total: 20700
  },

  {
    id: 125,
    invoiceNumber: "INV-2024-00125",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2024-06-09",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }
    ],
    total: 900
  },

  {
    id: 126,
    invoiceNumber: "INV-2024-00126",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-09-10",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 5, price: 1200, total: 6000 }, { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }, { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }
    ],
    total: 33200
  },

  {
    id: 127,
    invoiceNumber: "INV-2024-00127",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-01-08",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }, { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }
    ],
    total: 6150
  },

  {
    id: 128,
    invoiceNumber: "INV-2024-00128",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2025-06-08",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }
    ],
    total: 300
  },

  {
    id: 129,
    invoiceNumber: "INV-2024-00129",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2024-12-05",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }
    ],
    total: 1350
  },

  {
    id: 130,
    invoiceNumber: "INV-2024-00130",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-04-22",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "lead",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 4, price: 220, total: 880 }, { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }
    ],
    total: 1630
  },

  {
    id: 131,
    invoiceNumber: "INV-2024-00131",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2024-10-03",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }
    ],
    total: 9000
  },

  {
    id: 132,
    invoiceNumber: "INV-2024-00132",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2024-07-03",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }
    ],
    total: 26590
  },

  {
    id: 133,
    invoiceNumber: "INV-2024-00133",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-08-19",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }, { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }, { id: 3, name: "Keyboard Mechanical", quantity: 3, price: 450, total: 1350 }
    ],
    total: 21550
  },

  {
    id: 134,
    invoiceNumber: "INV-2024-00134",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2024-03-12",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 3, price: 450, total: 1350 }, { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }
    ],
    total: 1950
  },

  {
    id: 135,
    invoiceNumber: "INV-2024-00135",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2024-11-06",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "lead",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }, { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }
    ],
    total: 26750
  },

  {
    id: 136,
    invoiceNumber: "INV-2024-00136",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-10-10",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }
    ],
    total: 7490
  },

  {
    id: 137,
    invoiceNumber: "INV-2024-00137",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-05-02",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }
    ],
    total: 5400
  },

  {
    id: 138,
    invoiceNumber: "INV-2024-00138",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2025-11-12",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }, { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }
    ],
    total: 20100
  },

  {
    id: 139,
    invoiceNumber: "INV-2024-00139",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2025-11-08",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }, { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }
    ],
    total: 1800
  },

  {
    id: 140,
    invoiceNumber: "INV-2024-00140",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-07-21",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }
    ],
    total: 2250
  },

  {
    id: 141,
    invoiceNumber: "INV-2024-00141",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2023-02-23",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }, { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }
    ],
    total: 2250
  },

  {
    id: 142,
    invoiceNumber: "INV-2024-00142",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2023-11-24",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 5, price: 1200, total: 6000 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }, { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }
    ],
    total: 6810
  },

  {
    id: 143,
    invoiceNumber: "INV-2024-00143",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-10-05",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 4, price: 600, total: 2400 }
    ],
    total: 2400
  },

  {
    id: 144,
    invoiceNumber: "INV-2024-00144",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-09-27",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }, { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }, { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }
    ],
    total: 2310
  },

  {
    id: 145,
    invoiceNumber: "INV-2024-00145",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2024-11-02",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }, { id: 7, name: "Desk Lamp LED", quantity: 4, price: 150, total: 600 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }
    ],
    total: 7540
  },

  {
    id: 146,
    invoiceNumber: "INV-2024-00146",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2023-10-03",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }, { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }
    ],
    total: 15250
  },

  {
    id: 147,
    invoiceNumber: "INV-2024-00147",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2025-04-05",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }, { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 1110
  },

  {
    id: 148,
    invoiceNumber: "INV-2024-00148",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-07-04",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }
    ],
    total: 4500
  },

  {
    id: 149,
    invoiceNumber: "INV-2024-00149",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2025-02-01",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }, { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }, { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }
    ],
    total: 8600
  },

  {
    id: 150,
    invoiceNumber: "INV-2024-00150",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-10-15",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }, { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }
    ],
    total: 4500
  },

  {
    id: 151,
    invoiceNumber: "INV-2024-00151",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-09-09",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }
    ],
    total: 450
  },

  {
    id: 152,
    invoiceNumber: "INV-2024-00152",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2023-06-13",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 1, price: 450, total: 450 }, { id: 2, name: "Monitor 27'' 4K", quantity: 5, price: 1800, total: 9000 }, { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }
    ],
    total: 10650
  },

  {
    id: 153,
    invoiceNumber: "INV-2024-00153",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-03-22",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }, { id: 4, name: "Wireless Mouse", quantity: 5, price: 220, total: 1100 }
    ],
    total: 4700
  },

  {
    id: 154,
    invoiceNumber: "INV-2024-00154",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2024-07-29",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }
    ],
    total: 740
  },

  {
    id: 155,
    invoiceNumber: "INV-2024-00155",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2024-05-15",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 1, price: 220, total: 220 }, { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }
    ],
    total: 5920
  },

  {
    id: 156,
    invoiceNumber: "INV-2024-00156",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-09-12",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "negotiation",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }
    ],
    total: 6500
  },

  {
    id: 157,
    invoiceNumber: "INV-2024-00157",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2024-08-10",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }
    ],
    total: 150
  },

  {
    id: 158,
    invoiceNumber: "INV-2024-00158",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-09-24",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }
    ],
    total: 4040
  },

  {
    id: 159,
    invoiceNumber: "INV-2024-00159",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2024-06-12",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 5, price: 6500, total: 32500 }, { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }, { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }
    ],
    total: 36400
  },

  {
    id: 160,
    invoiceNumber: "INV-2024-00160",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-09-16",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "negotiation",
    products: [
      { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }
    ],
    total: 2700
  },

  {
    id: 161,
    invoiceNumber: "INV-2024-00161",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-10-25",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 5, price: 220, total: 1100 }, { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }, { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }
    ],
    total: 9400
  },

  {
    id: 162,
    invoiceNumber: "INV-2024-00162",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-11-06",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }
    ],
    total: 1950
  },

  {
    id: 163,
    invoiceNumber: "INV-2024-00163",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-01-24",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }, { id: 2, name: "Monitor 27'' 4K", quantity: 5, price: 1800, total: 9000 }, { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }
    ],
    total: 11700
  },

  {
    id: 164,
    invoiceNumber: "INV-2024-00164",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-10-16",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }, { id: 4, name: "Wireless Mouse", quantity: 5, price: 220, total: 1100 }, { id: 8, name: "External SSD 1TB", quantity: 1, price: 600, total: 600 }
    ],
    total: 27700
  },

  {
    id: 165,
    invoiceNumber: "INV-2024-00165",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2025-02-09",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }, { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }
    ],
    total: 4490
  },

  {
    id: 166,
    invoiceNumber: "INV-2024-00166",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2025-10-09",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }, { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }
    ],
    total: 9000
  },

  {
    id: 167,
    invoiceNumber: "INV-2024-00167",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2025-03-31",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }
    ],
    total: 3000
  },

  {
    id: 168,
    invoiceNumber: "INV-2024-00168",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2024-09-23",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }, { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }, { id: 5, name: "Docking Station", quantity: 3, price: 900, total: 2700 }
    ],
    total: 4560
  },

  {
    id: 169,
    invoiceNumber: "INV-2024-00169",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-08-04",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 6, name: "Office Chair", quantity: 5, price: 1200, total: 6000 }
    ],
    total: 6000
  },

  {
    id: 170,
    invoiceNumber: "INV-2024-00170",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2023-05-02",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "lead",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }, { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }, { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }
    ],
    total: 5850
  },

  {
    id: 171,
    invoiceNumber: "INV-2024-00171",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2023-08-14",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }, { id: 1, name: "Laptop Pro 14", quantity: 4, price: 6500, total: 26000 }
    ],
    total: 31240
  },

  {
    id: 172,
    invoiceNumber: "INV-2024-00172",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2023-11-13",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 5, price: 900, total: 4500 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }, { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }
    ],
    total: 24150
  },

  {
    id: 173,
    invoiceNumber: "INV-2024-00173",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-05-07",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }, { id: 3, name: "Keyboard Mechanical", quantity: 2, price: 450, total: 900 }, { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }
    ],
    total: 2100
  },

  {
    id: 174,
    invoiceNumber: "INV-2024-00174",
    companyId: 8,
    companyName: "EduSmart Academy",
    employee: "Piotr Kowalski",
    orderDate: "2024-12-09",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }, { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }
    ],
    total: 3000
  },

  {
    id: 175,
    invoiceNumber: "INV-2024-00175",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2025-07-16",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 5, price: 220, total: 1100 }, { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }
    ],
    total: 4700
  },

  {
    id: 176,
    invoiceNumber: "INV-2024-00176",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2023-06-08",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }, { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }
    ],
    total: 8300
  },

  {
    id: 177,
    invoiceNumber: "INV-2024-00177",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2023-12-15",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 4, price: 220, total: 880 }, { id: 8, name: "External SSD 1TB", quantity: 3, price: 600, total: 1800 }, { id: 3, name: "Keyboard Mechanical", quantity: 3, price: 450, total: 1350 }
    ],
    total: 4030
  },

  {
    id: 178,
    invoiceNumber: "INV-2024-00178",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-04-13",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 4, price: 1800, total: 7200 }
    ],
    total: 7200
  },

  {
    id: 179,
    invoiceNumber: "INV-2024-00179",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2025-12-10",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "negotiation",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }
    ],
    total: 1200
  },

  {
    id: 180,
    invoiceNumber: "INV-2024-00180",
    companyId: 5,
    companyName: "ProBuild Inwestycje",
    employee: "Katarzyna Wójcik",
    orderDate: "2023-06-15",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }, { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }
    ],
    total: 5100
  },

  {
    id: 181,
    invoiceNumber: "INV-2024-00181",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2025-10-18",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 4, price: 600, total: 2400 }
    ],
    total: 2400
  },

  {
    id: 182,
    invoiceNumber: "INV-2024-00182",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2023-06-23",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }, { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }
    ],
    total: 15250
  },

  {
    id: 183,
    invoiceNumber: "INV-2024-00183",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2025-04-01",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }
    ],
    total: 2100
  },

  {
    id: 184,
    invoiceNumber: "INV-2024-00184",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2024-05-29",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 5, name: "Docking Station", quantity: 2, price: 900, total: 1800 }
    ],
    total: 1800
  },

  {
    id: 185,
    invoiceNumber: "INV-2024-00185",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2024-01-18",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 8, name: "External SSD 1TB", quantity: 4, price: 600, total: 2400 }, { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }
    ],
    total: 4500
  },

  {
    id: 186,
    invoiceNumber: "INV-2024-00186",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-11-02",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 5, price: 1200, total: 6000 }, { id: 2, name: "Monitor 27'' 4K", quantity: 2, price: 1800, total: 3600 }, { id: 4, name: "Wireless Mouse", quantity: 3, price: 220, total: 660 }
    ],
    total: 10260
  },

  {
    id: 187,
    invoiceNumber: "INV-2024-00187",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2023-12-29",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 1, price: 6500, total: 6500 }
    ],
    total: 6500
  },

  {
    id: 188,
    invoiceNumber: "INV-2024-00188",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2024-07-15",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 1, price: 1800, total: 1800 }, { id: 7, name: "Desk Lamp LED", quantity: 1, price: 150, total: 150 }
    ],
    total: 1950
  },

  {
    id: 189,
    invoiceNumber: "INV-2024-00189",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2025-04-01",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "negotiation",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 5, price: 450, total: 2250 }, { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }, { id: 4, name: "Wireless Mouse", quantity: 1, price: 220, total: 220 }
    ],
    total: 5470
  },

  {
    id: 190,
    invoiceNumber: "INV-2024-00190",
    companyId: 9,
    companyName: "Skyline Properties",
    employee: "Marta Zielińska",
    orderDate: "2025-09-30",
    orderStatus: "completed",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 4, price: 900, total: 3600 }
    ],
    total: 3600
  },

  {
    id: 191,
    invoiceNumber: "INV-2024-00191",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2023-05-15",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 1, name: "Laptop Pro 14", quantity: 3, price: 6500, total: 19500 }
    ],
    total: 24900
  },

  {
    id: 192,
    invoiceNumber: "INV-2024-00192",
    companyId: 4,
    companyName: "EcoMarket Hub",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-04-15",
    orderStatus: "pending",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 5, name: "Docking Station", quantity: 1, price: 900, total: 900 }, { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }, { id: 1, name: "Laptop Pro 14", quantity: 5, price: 6500, total: 32500 }
    ],
    total: 34600
  },

  {
    id: 193,
    invoiceNumber: "INV-2024-00193",
    companyId: 3,
    companyName: "FinTrust Advisory",
    employee: "Marta Zielińska",
    orderDate: "2025-12-04",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }, { id: 7, name: "Desk Lamp LED", quantity: 5, price: 150, total: 750 }
    ],
    total: 6150
  },

  {
    id: 194,
    invoiceNumber: "INV-2024-00194",
    companyId: 1,
    companyName: "AlfaTech Solutions",
    employee: "Anna Nowak",
    orderDate: "2024-03-26",
    orderStatus: "completed",
    paymentStatus: "paid",
    salesStage: "won",
    products: [
      { id: 3, name: "Keyboard Mechanical", quantity: 4, price: 450, total: 1800 }, { id: 7, name: "Desk Lamp LED", quantity: 2, price: 150, total: 300 }, { id: 8, name: "External SSD 1TB", quantity: 2, price: 600, total: 1200 }
    ],
    total: 3300
  },

  {
    id: 195,
    invoiceNumber: "INV-2024-00195",
    companyId: 10,
    companyName: "NextGen Systems",
    employee: "Tomasz Wiśniewski",
    orderDate: "2023-02-13",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "lead",
    products: [
      { id: 6, name: "Office Chair", quantity: 3, price: 1200, total: 3600 }, { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }, { id: 2, name: "Monitor 27'' 4K", quantity: 3, price: 1800, total: 5400 }
    ],
    total: 22000
  },

  {
    id: 196,
    invoiceNumber: "INV-2024-00196",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2024-05-07",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 1, price: 1200, total: 1200 }
    ],
    total: 1200
  },

  {
    id: 197,
    invoiceNumber: "INV-2024-00197",
    companyId: 7,
    companyName: "MedicoPlus Clinic",
    employee: "Anna Nowak",
    orderDate: "2024-07-20",
    orderStatus: "cancelled",
    paymentStatus: "refunded",
    salesStage: "lead",
    products: [
      { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 7, name: "Desk Lamp LED", quantity: 3, price: 150, total: 450 }
    ],
    total: 5250
  },

  {
    id: 198,
    invoiceNumber: "INV-2024-00198",
    companyId: 6,
    companyName: "LogiTrans Polska",
    employee: "Michał Lewandowski",
    orderDate: "2024-03-30",
    orderStatus: "completed",
    paymentStatus: "unpaid",
    salesStage: "won",
    products: [
      { id: 6, name: "Office Chair", quantity: 4, price: 1200, total: 4800 }, { id: 8, name: "External SSD 1TB", quantity: 5, price: 600, total: 3000 }, { id: 4, name: "Wireless Mouse", quantity: 2, price: 220, total: 440 }
    ],
    total: 8240
  },

  {
    id: 199,
    invoiceNumber: "INV-2024-00199",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-12-03",
    orderStatus: "pending",
    paymentStatus: "unpaid",
    salesStage: "negotiation",
    products: [
      { id: 4, name: "Wireless Mouse", quantity: 5, price: 220, total: 1100 }, { id: 8, name: "External SSD 1TB", quantity: 1, price: 600, total: 600 }
    ],
    total: 1700
  },

  {
    id: 200,
    invoiceNumber: "INV-2024-00200",
    companyId: 2,
    companyName: "BrightWave Marketing",
    employee: "Piotr Kowalski",
    orderDate: "2025-09-26",
    orderStatus: "pending",
    paymentStatus: "refunded",
    salesStage: "negotiation",
    products: [
      { id: 1, name: "Laptop Pro 14", quantity: 2, price: 6500, total: 13000 }
    ],
    total: 13000
  }
]
