import PropTypes from 'prop-types';
import React from 'react';
import styles from 'components/Section/Section.scss';
import { Element } from 'react-scroll'

export default class Section extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <Element name={this.props.scrollId} />
        {this.props.title && <div className={styles.title}>
          {this.props.title}
        </div>}
        <div className={styles.content}>
          {this.props.description && <div className={styles.description}>
            {this.props.description}
          </div>}
          {this.props.children}
        </div>
      </div>
    )
  }

}

Section.propTypes = {
  scrollId: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
