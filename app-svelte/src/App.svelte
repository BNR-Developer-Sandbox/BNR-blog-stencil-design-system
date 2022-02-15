<script>
	export let appName, fieldLabel, fieldName, submitLabel;
	import 'design-system/ds-shell';
	import 'design-system/ds-hero';
	import 'design-system/ds-form';
</script>

<ds-shell>
	<h1 slot="top">{appName}</h1>
	<ds-hero>
		<ds-form>
			<label>
				{fieldLabel}:
				<br />
				<input type="text" name="{fieldName}" />
			</label>
			<br />
			<slot slot="submit">
				<input type="submit" value="{submitLabel}" />
			</slot>
		</ds-form>
	</ds-hero>
	<slot slot="bottom">
		<span>1</span>
		<span>2</span>
		<span>3</span>
	</slot>
</ds-shell>
