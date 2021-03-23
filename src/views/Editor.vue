<template>
	<div class="main pa-8">
		<div class="code-area">
			<textarea id="htmlCode" placeholder="HTML Code" @input="showPreview()"></textarea>
			<textarea id="cssCode" placeholder="CSS Code" @input="showPreview()"></textarea>
			<textarea id="jsCode" placeholder="JavaScript Code" @input="showPreview()"></textarea>
		</div>
		<div class="preview-area">
			<iframe id="preview-window"></iframe>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		showPreview() {
			var htmlCode = document.getElementById("htmlCode").value
			var cssCode = "<style>" + document.getElementById("cssCode").value + "<\/style>"
			var jsCode = "<script>" + document.getElementById("jsCode").value + "<\/script>"
			var frame = document.getElementById("preview-window").contentWindow.document;
			frame.open();
			console.log(jsCode)
			frame.write(htmlCode+cssCode+jsCode)
			frame.close();
		},
	}
}
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}
	.main {
		height: 100vh;
		display: flex;
	}
	.code-area {
		display: flex;
		flex-direction:column;
		width: 50%;
		border-right:1px solid #555;
	}
	.code-area textarea {
		resize: none;
		outline: none;
		width: 100%;
		height: 33.33%;
		font-size: 18px;
		padding: 10px;
	}
	.preview-area {
		width: 50%;
	}
	.preview-area iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>