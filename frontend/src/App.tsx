import { SignedIn, SignInButton, UserButton } from '@clerk/clerk-react'


const App = () => {
  return (
    <div>
      <SignInButton />

      <SignedIn>
        <UserButton />
        <p>Welcome to NodePad!</p>
        <p>This is a simple note-taking app.</p>
        <p>You are signed in!</p>
      </SignedIn>
    </div>
  )
}

export default App