import React from "react";
import {
  Page,
  Text,
  Document,
  PDFViewer,
  PDFDownloadLink,
  StyleSheet,
  Font,
  View,
  Image,
} from "@react-pdf/renderer";
import ArimaFont from "./Arima.ttf";

let amir = "amirkhan";
const MyPage = () => (
  <Page size="A4" style={styles.body}>
    <View style={styles.headerWrapper} fixed={true}>
      <Image
        style={[styles.header, styles.logo, styles.image]}
        src="/logo.png"
        fixed={true}
      />

      <Text fixed={true} style={[styles.header, styles.patientName]}>
        patientName
      </Text>
    </View>
    <Text style={styles.author}>Individualized Treatment Plan</Text>

    <View style={[styles.clientWrapper, styles.border]}>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Client:</Text>
        <Text style={styles.right}>Amir Rana</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Date of Birth:</Text>
        <Text style={styles.right}>15/04/1999</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Services Provided:</Text>
        <Text style={styles.right}>ALP</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Family Consultant:</Text>
        <Text style={styles.right}>jon doe</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Start Date:</Text>
        <Text style={styles.right}>10/03/2022</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>End Date:</Text>
        <Text style={styles.right}>15/03/2022</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Medicaid Number:</Text>
        <Text style={styles.right}>#4141312</Text>
      </View>
    </View>

    <Text style={[styles.author, styles.backgrondInformatin]}>
      Background Information
    </Text>

    <View style={styles.clientWrapper}>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Mother Name:</Text>
        <Text style={styles.right}>Amir Rana</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Father Name:</Text>
        <Text style={styles.right}>15/04/1999</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Age:</Text>
        <Text style={styles.right}>ALP</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Location:</Text>
        <Text style={styles.right}>jon doe</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>School:</Text>
        <Text style={styles.right}>10/03/2022</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Communication:</Text>
        <Text style={styles.right}>15/03/2022</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Behaviour:</Text>
        <Text style={styles.right}></Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Hygiene:</Text>
        <Text style={styles.right}></Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.client, styles.left]}>Reinforcements:</Text>
        <Text style={styles.right}></Text>
      </View>
    </View>

    <Text style={[styles.author, styles.backgrondInformatin]}>
      Service_Heading
    </Text>
    <View>
      <Text style={[styles.author, styles.paragraphTitle, styles.category]}>
        Category:
      </Text>
      <Text style={[styles.text]}>
        <Text style={{ fontSize: "14px", fontWeight: "bold" }}>Goals: </Text>
        Celebrate Ability has developed the above goals and objectives as a
      </Text>
      {/* list */}
      <Text style={[styles.text]}>
        <Text
          style={{ fontSize: "14px", fontWeight: "bold", textIndent: "30px" }}
        >
          1.
        </Text>
        {"      "}
        <Text style={styles.indentaion}>
          Celebrate Ability has developed the above goals and objectives as a
        </Text>
      </Text>
    </View>

    <View style={styles.divider} />

    <Text style={[styles.author, styles.paragraphTitle]}>
      Implementation and Evaluation of the Plan
    </Text>
    <Text style={[styles.text, styles.indentaion]}>
      Celebrate Ability has developed the above goals and objectives as a
      comprehensive plan for both the family and Celebrate Ability team members.
      The Family Consultant is responsible for using observation methods, family
      interviews, and team member input to create goals and objectives. for the
      treatment plan. Furthermore, the Family Consultant is responsible for
      evaluation and oversight of the goals and objectives.
    </Text>
    <Text style={[styles.text, styles.indentaion]}>
      The IISS and family members are responsible for daily implementation of
      the plan to make progress toward the goals and objectives. The IISS and
      family members are also responsible for reporting and concerns to the
      family Consultant. Services may be conducted in person. Services may be
      conducted virtually during the allowed dates as designated by Appendix K,
      MSDE, or the autism waiver program.
    </Text>
    <Text style={[styles.text, styles.indentaion]}>
      Services may be conducted in person. Services may be conducted virtually
      during the allowed dates as designated by Appendix K, MSDE, or the autism
      waiver program.
    </Text>

    <View style={styles.signatureWrapper}>
      <View>
        <Text style={styles.text}>Parent Signature:</Text>
      </View>
      <View style={styles.signatureLine}></View>
      <View>
        <Text style={styles.text}>Date:</Text>
      </View>
      <View style={[styles.signatureLine, styles.DateLine]}></View>
    </View>
    <View style={styles.signatureWrapper}>
      <View>
        <Text style={styles.text}>Staff Signature:</Text>
      </View>
      <View style={[styles.signatureLine, styles.staffSignature]}></View>
      <View>
        <Text style={styles.text}>Date:</Text>
      </View>
      <View style={[styles.signatureLine, styles.DateLine]}></View>
    </View>

    <Text fixed={true} style={styles.pageNumber}>
      3416 Taylor St., Chevy Chase, MD 20815
    </Text>
    <Text fixed={true} style={styles.pageNumberTwo}>
      202-441-5449
    </Text>
  </Page>
);

Font.register({
  family: "Arima",
  fonts: [
    {
      src: ArimaFont,
      fontWeight: "normal",
    },
  ],
  //src: "./Arima.ttf", //"https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Times-Roman",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  headerWrapper: {
    display: "flex",
  },
  image: {
    width: "10%",
    marginBottom: 10,
  },
  left: {
    width: "200px",
    fontSize: 10,
    marginVertical: "1px",
  },
  right: {
    fontSize: 12,
    marginVertical: "1px",
  },
  row: {
    flexDirection: "row",
  },

  border: {
    borderBottom: "1px solid #46c5c7",
    borderTop: "1px solid #46c5c7",
  },
  clientWrapper: {
    padding: 5,
  },

  value: {
    paddingHorizontal: 35,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  author: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    textDecoration: "underline",
  },
  backgrondInformatin: {
    marginTop: "20px",
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Times-Roman",
  },
  text: {
    marginBottom: 12,
    fontSize: 11,
    fontWeight: "light",
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },

  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  pageNumberTwo: {
    position: "absolute",
    fontSize: 12,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  header: {
    positiion: "absolute",
    top: 0,
    flexDirection: "column",
    fontSize: "12px",
  },
  patientName: {
    position: "absolute",
    top: 0,
    right: 0,
    textAlign: "center",
  },
  paragraphTitle: {
    textAlign: "left",
  },
  category: {
    marginBottom: "10px",
  },
  indentaion: {
    textIndent: "30px",
  },
  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: "lightgrey",
    marginBottom: "10px",
  },
  signatureWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "10px",
  },

  signatureLine: {
    width: "45%",
    borderBottom: "1px solid grey",
    position: "relative",
    bottom: "10px",
  },
  staffSignature: {
    marginLeft: "10px",
  },
  DateLine: {
    width: "25%",
  },
});

const MyDoc = () => (
  <Document>
    <MyPage />
  </Document>
);

function PdfScreen() {
  return (
    <>
      <PDFViewer style={{ width: "1440px", height: "800px" }}>
        <MyDoc />
      </PDFViewer>

      <br />
      <br />

      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </>
  );
}

export default PdfScreen;
