import styles from "./styles/form.module.css"

function App() {

  return (
    <>
      <main className="rounded-xl mx-auto w-1/2 bg-white p-7 mt-12">
        <h1 className="text-4xl font-semibold pb-5">Contact Us</h1>
        <form action="#" className="flex flex-col w-full">
          <div className="w-full flex gap-3">
            <span className="flex flex-col w-1/2">
              <span>
                <label htmlFor="first-name" >First Name </label><span className={styles.greenStar}>*</span>
              </span>
              <input className="border border-solid border-grey rounded-md p-2 mt-2 mb-5" id="first-name" type="text" />
            </span>

            <span className="flex flex-col w-1/2">
              <span>
                <label htmlFor="last-name" >Last Name </label><span className={styles.greenStar}>*</span>
              </span>
              <input className="border border-solid border-grey rounded-md p-2 mt-2 mb-5" id="last-name" type="text" />
            </span>
          </div>

          <span><label htmlFor="email-address" >Email Address </label><span className={styles.greenStar}>*</span></span>
          <input className="border border-solid border-grey rounded-md p-2 mt-2 mb-5 w-full" id="email-address" type="email" name="email" />

          <span><label htmlFor="query-type" >Query Type </label><span className={styles.greenStar}>*</span></span>
          <div className="flex justify-between gap-3 mt-2 mb-5">
            <span className="w-1/2 border border-solid border-grey rounded-md p-2 flex items-center">
              <input className="me-2" id="enquiry" type="radio" name="query-type" />
              <label htmlFor="enquiry">General Enquiry</label>
            </span>
            <span className="w-1/2 border border-solid border-grey rounded-md p-2 flex items-center">
              <input className="me-2" id="support" type="radio" name="query-type" />
              <label htmlFor="support">Support Request</label>
            </span>
          </div>

          <span>
            <label htmlFor="message" >Message </label><span className={styles.greenStar}>*</span>
          </span>
          <textarea className="border border-solid border-grey rounded-md p-2 mt-2" name="message" id="message" rows={5}></textarea>

          <div className="my-6 flex items-center">
            <input className="border border-solid border-grey rounded-md p-2 me-2" type="checkbox" name="contactMe" id="contactMe" />
            <label htmlFor="contactMe"><span> I consent to being contacted by the team <span className={styles.greenStar}>*</span></span></label>
          </div>

          <input className={`${styles.button} rounded-md py-3 text-white`} type="submit" value="Submit" />
        </form>
      </main>
    </>
  )
}

export default App
