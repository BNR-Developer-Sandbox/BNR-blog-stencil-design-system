import { Component, Event, EventEmitter, Host, State, h } from '@stencil/core';

@Component({
  tag: 'ds-form',
  styleUrl: 'ds-form.css',
  shadow: true,
})
export class DsForm {
  @State() data: any = {};
  @Event({
    eventName: 'submitted',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  submittedEvent: EventEmitter;
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
      this.submittedEvent.emit(this.data);
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
          <slot name="submit"></slot>
        </form>
      </Host>
    );
  }
}
