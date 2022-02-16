import { Component, Event, EventEmitter, Host, State, h, Element } from '@stencil/core';

@Component({
  tag: 'ds-form',
  styleUrl: 'ds-form.css',
  shadow: true,
})
export class DsForm {
  @Element() el;
  @State() data: any = {};
  @Event({
    eventName: 'submit',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  submit: EventEmitter;
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
      this.submit.emit(this.data);
      const form = this.el.shadowRoot.querySelector('form');
      form.requestSubmit(form);
      console.log('emitted', this.data)
    }
    console.log('outside emitted', this.data)
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
          <slot name="submit"></slot>
        </form>
      </Host>
    );
  }
}
