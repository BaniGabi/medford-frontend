import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 5,
  },
  header: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  table: {
    display: "table",
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
  },
  tableRow: {
    margin: 10,
    flexDirection: "row",
  },
  tableCellHeader: {
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "blue",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  tableFooter: {
    flexDirection: "row",
    marginTop: 10,
    borderTopWidth: 1,
    paddingTop: 5,
  },
  tableFooterCell: {
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
  },
});

const MyDocument = ({ cartItems, totalCartPrice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text>medford</Text>
        <Text>banigabi2023@gmail</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellHeader}>Drug</Text>
          <Text style={styles.tableCellHeader}>Qty</Text>
          <Text style={styles.tableCellHeader}>Brand</Text>
          <Text style={styles.tableCellHeader}>Price</Text>
          <Text style={styles.tableCellHeader}>Total</Text>
        </View>
        {cartItems.map((item) => (
          <View style={styles.tableRow} key={item._id}>
            <Text style={styles.tableCell}>{item.product.drugName}</Text>
            <Text style={styles.tableCell}>{item.quantity}</Text>
            <Text style={styles.tableCell}>{item.product.manufacturer}</Text>
            <Text style={styles.tableCell}>{item.product.price}</Text>
            <Text style={styles.tableCell}>
              {item.product.price * item.quantity}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.tableFooter}>
        <Text style={styles.tableFooterCell}>Total:</Text>
        <Text style={styles.tableFooterCell}>{totalCartPrice}"₦"</Text>
      </View>
    </Page>
  </Document>
);
export default MyDocument;
