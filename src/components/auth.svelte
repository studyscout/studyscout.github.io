<script lang="ts">
	//stuff
	import { authen, prov } from '../scripts/firestore';
	import { signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';

	let user: any = null; // To store the signed-in user
	let showPopup = false; // To control whether the pop-up is shown

	// Function to handle Google sign-in
	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(authen, prov);
			user = result.user; // Store the signed-in user
			console.log('User Info:', user);
			showPopup = false; // Close the pop-up on successful sign-in
		} catch (error: any) {
			console.error('Error during sign-in:', error.message);
		}
	};

	// Function to handle sign out
	const handleSignOut = async () => {
		await signOut(authen);
		user = null; // Clear the user information on sign-out
		console.log('User signed out');
	};

	// Listen for changes in authentication state
	onMount(() => {
		const unsubscribe = onAuthStateChanged(authen, (currentUser) => {
			user = currentUser; // Set the current user, or null if not signed in
			console.log('Auth state changed, current user:', user);
		});

		// Clean up the listener when the component is destroyed
		return () => unsubscribe();
	});
</script>

<!-- UI for showing logged-in or logged-out state -->
{#if user}
	<div>
		<p>Welcome, {user.displayName}!</p>
		<button on:click={handleSignOut}>Sign Out</button>
	</div>
{:else}
	<button on:click={() => (showPopup = true)}>Sign in with Google</button>
{/if}

<!-- Pop-up menu for Google sign-in -->
{#if showPopup}
	<div class="popup">
		<div class="popup-content">
			<h2>Sign In</h2>
			<button on:click={signInWithGoogle}>Sign in with Google</button>
			<button on:click={() => (showPopup = false)}>Cancel</button>
		</div>
	</div>
{/if}

<style>
	/* Styles for the pop-up */
	.popup {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.popup-content {
		background: white;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		text-align: center;
	}
	button {
		padding: 10px;
		margin: 5px;
		background-color: #4285f4;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
