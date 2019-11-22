import React from 'react';
import styles from './input.module.css';

class Input extends React.Component {

    
    render() {
        if (this.props.required) {
            return (
                <div className={styles.inputContainer}> 
                    <input name={this.props.name} className={styles.input} type={this.props.type} label={this.props.label} placeholder={this.props.placeholder} required>
                    </input>
                    <p className={styles.label}>{this.props.label}</p>
                </div> 
            );  
        } else {
            return (
                <div className={styles.inputContainer}> 
                    <input name={this.props.name} className={styles.input} type={this.props.type} label={this.props.label} placeholder={this.props.placeholder} > 
                    </input>
                    <p className={styles.label}>{this.props.label}</p>
                </div> 
            );  
        }
    }
}

export default Input; 