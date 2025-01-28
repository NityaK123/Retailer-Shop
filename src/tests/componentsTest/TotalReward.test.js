import { render, screen, within } from "@testing-library/react";
import TotalReward from "../../components/TotalReward";

describe("TotalReward Component", () => {
  it("renders the table with customer transaction data", () => {
    //mock data
    const mockData = [
      {
        transactionId: 101,
        customerId: 1000,
        customerName: "John Doe",
        purchaseDate: "2025-01-05",
        productPurchased: "Smartphone",
        totalPrice: 599.99,
      },
      {
        transactionId: 102,
        customerId: 1000,
        customerName: "John Doe",
        purchaseDate: "2025-01-20",
        productPurchased: "Laptop",
        totalPrice: 1200.0,
      },
    ];

    render(<TotalReward data={mockData} />);

    // Check if the title is rendered
    expect(screen.getByText("Total Rewards")).toBeInTheDocument();

    // Check table headers using getByRole for 'columnheader' role
    expect(
      screen.getByRole("columnheader", { name: /S. NO./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Customer Id/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Customer Name/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Total Rewards Points/i }),
    ).toBeInTheDocument();

    // Check that rows are rendered (use getAllByRole for 'row' role)
    const rows = screen.getAllByRole("row");

    expect(rows.length).toBe(3);

    // Check data for the first row
    const firstRowCells = within(rows[1]).getAllByRole("cell");
    expect(firstRowCells[1]).toHaveTextContent("1000"); // Customer Id
    expect(firstRowCells[2]).toHaveTextContent("John Doe"); // Customer Name

    // Check data for the second row
    const secondRowCells = within(rows[2]).getAllByRole("cell");
    expect(secondRowCells[1]).toHaveTextContent("1000"); // Customer Id
    expect(secondRowCells[2]).toHaveTextContent("John Doe"); // Customer Name
  });

  it("does not render any rows if no data is passed", () => {
    render(<TotalReward data={[]} />);

    // Ensure no rows except for the headers
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(1); // Only the header row should be present
  });
});
