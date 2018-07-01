<template>
    <form action="action_page.php">
        <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>
    
            <label for="email">
                <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" required>
    
            <label for="psw">
                <b>Name</b>
            </label>
            <input type="text" placeholder="Enter Name" name="name" required>
    
            <button type="submit" class="registerbtn">Send</button>
        </div>
    </form>
</template>
<script>
import axios from 'axios'

export default {
    name:'Register',
    methods: {
        async sendData () {
            let response = await axios.post('https://1d92aff2.ngrok.io/register',{
                name: xxxx,
                email: xxxx
            })
            console.log(response)
        
        }
    }
}
</script>
