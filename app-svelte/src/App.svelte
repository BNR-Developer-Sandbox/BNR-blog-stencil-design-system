<script>
	export let appName, fieldLabel, fieldName, submitLabel, handleFormData;
	import 'design-system/ds-shell';
	import 'design-system/ds-hero';
	import 'design-system/ds-form';
</script>

<ds-shell>
	<h1 slot="header">{appName}</h1>
	<ds-hero>
		<ds-form on:formdata={handleFormData}>
			<label>
				{fieldLabel}:
				<br />
				<input type="text" name="{fieldName}" />
			</label>
			<br />
			<input type="submit" value="{submitLabel}" />
		</ds-form>
	</ds-hero>
	<span slot="footer">
		<span>1</span>
		<span>2</span>
		<span>3</span>
	</span>
</ds-shell>
