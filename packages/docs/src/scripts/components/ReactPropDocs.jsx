import PropTypes from 'prop-types';
import React from 'react';
import ReactPropDoc from './ReactPropDoc';

/**
 * Render a table with property documentation (generated by react-docgen)
 */
class ReactPropDocs extends React.PureComponent {
  rows() {
    const props = Object.getOwnPropertyNames(this.props.propDocs);

    return props.map(prop => {
      // Hides docs for react props with `@hide-prop` tag in the description
      const description = this.props.propDocs[prop].description;
      if (!description.match(/@hide-prop/i)) {
        return <ReactPropDoc key={prop} name={prop} {...this.props.propDocs[prop]} />;
      }
    });
  }

  render() {
    return [
      <h3 key="propDocsHeader">Props</h3>,
      <div key="propDocsTable" className="docs_table--wrapper">
        <table className="ds-c-table ds-c-table--borderless docs_table">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Default</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>{this.rows()}</tbody>
        </table>
      </div>
    ];
  }
}

ReactPropDocs.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  propDocs: PropTypes.object
};

export default ReactPropDocs;
