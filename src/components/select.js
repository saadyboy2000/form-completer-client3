import React from 'react';

export default class Select extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.select.focus();
        }
    }
    render() {
        const Element = this.props.element || 'select';

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-select">
                <label htmlFor={this.props.select.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <Element
                    {...this.props.select}
                    id={this.props.select.name}
                    type={this.props.type}
                    ref={select => (this.select = select)}
                />
            </div>
        );
    }
}
