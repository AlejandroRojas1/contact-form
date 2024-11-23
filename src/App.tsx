import styles from "./styles/form.module.css"

function App() {

  return (
    <>
      <main className="rounded-md mx-auto w-1/2 bg-white p-5">
        <h1 className="text-4xl font-semibold">Coantact Us</h1>
        <form action="#" className="flex flex-col w-full">
          <div className="w-full flex">

            <span className="flex flex-col w-1/2">
              <span>
                <label htmlFor="first-name" >First Name </label><span className={styles.greenStar}>*</span>
              </span>
              <input id="first-name" type="text" />
            </span>

            <span className="flex flex-col w-1/2">
              <span>
                <label htmlFor="last-name" >Last Name </label><span className={styles.greenStar}>*</span>
              </span>
              <input id="last-name" type="text" />
            </span>
          </div>

          <label htmlFor="email-address" >Email Address </label><span className={styles.greenStar}>*</span>
          <input id="email-address" type="email" name="email" className="w-full" />

          <label htmlFor="query-type" >Query Type </label><span className={styles.greenStar}>*</span>
          <div className="flex justify-between">
            <span className="w-1/2">
              <input id="enquiry" type="radio" name="query-type" />
              <label htmlFor="enquiry">General Enquiry</label>
            </span>
            <span className="w-1/2">
              <input id="support" type="radio" name="query-type" />
              <label htmlFor="support">Support Request</label>
            </span>
          </div>

          <span>
            <label htmlFor="message" >Message </label><span className={styles.greenStar}>*</span>
          </span>
          <textarea name="message" id="message"></textarea>

          <div>
            <input type="checkbox" name="contactMe" id="contactMe" />
            <label htmlFor="contactMe"> I consent to being contacted by the team</label>
          </div>
          
          <input type="submit" value="Submit" />
        </form>
      </main>
    </>
  )
}

export default App
