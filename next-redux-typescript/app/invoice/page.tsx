
export default function Page()
{
    console.log('Invoice page');
    async function createInvoice(formData: FormData) {
        'use server'

        const rawFormData = {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status'),
        }
        console.log('Form data ',rawFormData);

        // mutate data
        // revalidate cache
    }
    return (<div>
        Invoice page
        <form action={createInvoice}>
            <div className={"form-group"}>
                <label>Customer Id</label>
                <input className={"form-control"} name={"customerId"}/>
            </div>
            <div className={"form-group"}>
                <label>Amount</label>
                <input className={"form-control"} name={"amount"}/>
            </div>
            <div className={"form-group"}>
                <label>Status</label>
                <input className={"form-control"} name={"status"}/>
            </div>
            <div className={"form-group"}>
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </div>
        </form>
    </div>);
}