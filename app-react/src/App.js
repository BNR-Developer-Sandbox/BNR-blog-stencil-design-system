import "design-system/ds-shell";
import "design-system/ds-hero";
import "design-system/ds-form";

function App() {
  return (
    <ds-shell>
      <h1 slot="header">React App</h1>
      <ds-hero>
        <ds-form>
          <label>
            How did you react?:
            <br />
            <input type="text" name="reaction" />
          </label>
          <br />
          <slot slot="submit">
            <input type="submit" value="???" />
          </slot>
        </ds-form>
      </ds-hero>
      <span slot="footer">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </span>
    </ds-shell>
  );
}

export default App;
