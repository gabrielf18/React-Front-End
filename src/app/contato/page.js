import Header from "@/components/layout/Header"
import Button from "@/components/utils/Button"

const user = {name: "Jamelão", email : "aquele@email.com", photo:"awdhuaiwd"}

const QuemSomos = () => {
    return (
      <> 
        <h1>QUEM SOMOS?</h1>
        <Button titulo = 'Login'/>
        <Button user={user}/>
      </>
    )
  }
  
  export default QuemSomos