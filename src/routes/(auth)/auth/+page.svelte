<script>
	import { enhance } from '$app/forms';
</script>

<div>
	<h1 class="mt-5 text-center text-[50px] font-medium">Login</h1>
	<div class="mt-5">
		<form method="POST" action="?/auth" use:enhance>
			<button
				formaction="?/auth&provider=github"
				class="mb-[20px] flex h-[41px] w-[100%]
  items-center justify-center gap-2 rounded-[5px] bg-white text-[20px]
		font-bold"
			>
				<iconify-icon icon="logos:github-icon" class="text-[25px] text-black"></iconify-icon>
				Github
			</button>

			<button
				formaction="?/auth&provider=google"
				class="mb-[20px] flex h-[41px] w-[100%]
  items-center justify-center gap-2 rounded-[5px] bg-white text-[20px] font-bold"
			>
				<iconify-icon icon="devicon:google" class="text-[25px] text-black"></iconify-icon>
				Google
			</button>
		</form>
	</div>
</div>
