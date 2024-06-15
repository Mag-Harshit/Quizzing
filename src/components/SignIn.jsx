import React from 'react'

const SignIn = () => {
  return (
<main class="text-center form-signin w-100 m-auto container" >
  <form style={{marginTop:'10%'}}>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating mx-auto w-50">
      <input type="email" class="form-control w-100" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mx-auto w-50">
      <input type="password" class="form-control w-100" id="floatingPasswordss" placeholder="Password"/>
      <label for="floatingPasswordss">Password</label>
    </div>

    <div class="form-check text-start my-3">
    </div>
    <button class="btn btn-primary w-25 py-2" type="submit">Sign in</button>
    <p class="mt-2 mb-3 text-body-secondary">OR</p>
    <button class="btn btn-secondary w-25 py-2 border" type="submit">Sign up</button>
  </form>
</main>

    

  )
}

export default SignIn;