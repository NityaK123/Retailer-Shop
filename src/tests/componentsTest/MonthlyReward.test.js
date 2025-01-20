import { render, screen } from "@testing-library/react";
import RetailerShop from "../../components/MonthlyReward";

describe("RetailerShop", () => {
  const mockData = [
    {
      transactionId: 101,
      customerId: 1000,
      customerName: "John Doe",
      purchaseDate: "2025-01-05",
      productPurchased: "Smartphone",
      price: 599.99,
    },
    {
      transactionId: 102,
      customerId: 1000,
      customerName: "John Doe",
      purchaseDate: "2025-01-20",
      productPurchased: "Laptop",
      price: 1200.0,
    },
  ];

  test("renders the table with correct headers", () => {
    render(<RetailerShop data={mockData} />);

    // Check if the table headers are rendered correctly
    expect(
      screen.getByRole("columnheader", { name: /S\. NO\./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Customer Id/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Name/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Month/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Year/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Reward Points/i }),
    ).toBeInTheDocument();
  });

  test("renders the correct number of rows based on data", () => {
    render(<RetailerShop data={mockData} />);

    // Check if the correct number of rows are rendered
    const rows = screen.getAllByRole("row"); // Get all rows
    expect(rows).toHaveLength(mockData.length + 1); // 1 row for the header, and the rest for data
  });
});
