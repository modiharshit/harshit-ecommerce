import Footer from "./Footer";

const PaymentPolicy = () => {
    return(
        <>
        <div className="paymentpolicy" style={{textAlign: "left"}}>
           
           <h1>Payment Policy</h1>
            <p>You may make payment using a valid credit/debit and/or any other payment card, online banking facility, or other payment instrument ("Virtual Payment Modes"), or cash on delivery/cheque on delivery (ahmedabad only) option.</p>
            <p>You acknowledge and understand that all nuances and modalities connected to Virtual Payment Modes will be controlled individually by agreement(s) / terms and conditions between you and the appropriate banks and/or financial institutions, as applicable. We will not be held liable in any way for any responsibility that may emerge as a result of or in connection with the Virtual Payment Modes (including any fraudulent transaction). Regardless of the terms of the Terms of Use, you agree to hold Pinopen harmless from any liability that may arise in this regard.</p>
            <p>We shall not be liable for any loss of any kind caused to you as a result of the decline of permission for any transaction as a result of you exceeding your pre-set allowed payment limit under your credit / debit / or other payment cards and / or online banking accounts, as applicable.</p>
            <p>We may seek further authorisation from you, such as a telephone confirmation of your order and/or other information, at our sole discretion. Pinopen offers the following payment alternatives to its customers:</p>
            
            <h2>Credit Card / Debit Card / Net Banking:</h2>
            <p>We provide credit/debit card and net banking facilities to make purchases online. All the online transactions are secure and kept confidential and routed through Pay U Money.</p>
            <h2>Cash on Delivery:</h2>
            <p>We also provides Cash On Delivery (COD).</p>
        </div>
        <Footer/>
        </>
    )
}

export default PaymentPolicy;