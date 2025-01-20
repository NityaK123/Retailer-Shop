import { render, screen, within } from "@testing-library/react";
import TransactionDetails from "../../components/Transaction";

describe("TransactionDetails Component", () => {
  it("renders the table with transaction data", () => {
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
        customerId: 1001,
        customerName: "Jane Doe",
        purchaseDate: "2025-01-10",
        productPurchased: "Laptop",
        price: 1200,
      },
    ];

    render(<TransactionDetails data={mockData} />);

    // Check if the title is rendered
    expect(screen.getByText("Transaction Details")).toBeInTheDocument();

    // Check table headers using getByRole for 'columnheader' role
    expect(
      screen.getByRole("columnheader", { name: /S. NO./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Transaction Id/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Customer Name/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Purchase Date/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Product Purchase/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Price/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /Rewards Points/i }),
    ).toBeInTheDocument();

    // Check if the data is rendered correctly in the table rows
    const rows = screen.getAllByRole("row");

    expect(rows.length).toBe(3);

    // Check data for the first row (Smartphone transaction)
    const firstRowCells = within(rows[1]).getAllByRole("cell");
    expect(firstRowCells[1]).toHaveTextContent("101"); // Transaction Id
    expect(firstRowCells[2]).toHaveTextContent("John Doe"); // Customer Name
    expect(firstRowCells[3]).toHaveTextContent("2025-01-05"); // Purchase Date
    expect(firstRowCells[4]).toHaveTextContent("Smartphone"); // Product Purchased
    expect(firstRowCells[5]).toHaveTextContent("599.99"); // Price

    // Check data for the second row (Laptop transaction)
    const secondRowCells = within(rows[2]).getAllByRole("cell");
    expect(secondRowCells[1]).toHaveTextContent("102"); // Transaction Id
    expect(secondRowCells[2]).toHaveTextContent("Jane Doe"); // Customer Name
    expect(secondRowCells[3]).toHaveTextContent("2025-01-10"); // Purchase Date
    expect(secondRowCells[4]).toHaveTextContent("Laptop"); // Product Purchased
    expect(secondRowCells[5]).toHaveTextContent("1200"); // Price
  });

  it("does not render any rows if no data is passed", () => {
    render(<TransactionDetails data={[]} />);

    // Ensure no rows except for the headers
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(1); // Only the header row should be present
  });
});
