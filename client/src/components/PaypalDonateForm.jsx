import React from 'react'

const PaypalDonateForm = () => {
    const handleSubmit = () => {
        // Handle form submission logic
    }
    return (

        <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="business" value="ZL3QHT4P3CNPY" />
            <input type="hidden" name="no_recurring" value="1" />
            <input type="hidden" name="item_name" value="I am acting on behalf of the Coupon Champs, every dollar donated will go to paying for our bootcamp tuition." />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - Totally a trusted source!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
    );
}

export default PaypalDonateForm;