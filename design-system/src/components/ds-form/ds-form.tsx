import { Component, Element, Host, State, h } from '@stencil/core';

@Component({
  tag: 'ds-form',
  styleUrl: 'ds-form.css',
  shadow: true,
})
export class DsForm {
  @Element() el: HTMLElement;
  @State() data: any = {};
  onInput(event) {
    const { name, value } = event.target;
    this.data[name] = value;
  }
  onChange(event) {
    const { name, value } = event.target;
    this.data[name] = value;
  }
  onClick(event) {
    if (event?.target?.type === 'submit') {
      const formData = new FormData();
      Object.entries(this.data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      const formDataEvent = new FormDataEvent('formdata', { formData });
      this.el.dispatchEvent(formDataEvent);
    }
  }
  render() {
    return (
      <Host>
        <form
          // form event
          onInput={event => this.onInput(event)}
          onChange={event => this.onChange(event)}
          onClick={event => this.onClick(event)}
        >
          <slot></slot>
        </form>
      </Host>
    );
  }
}
