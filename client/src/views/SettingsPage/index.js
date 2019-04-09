import React from 'react';

// import components here
import SettingsForm from '../../components/SettingsForm';
import CompanyForm from '../../components/CompanyForm';
import CompanyDropdownList from '../../components/CompanyDropdownList';
// import styles here
// import "./SettingsPage.css";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'create',
      companyList: [
        {
          companyName: 'testing',
          companyZip: '30000',
          companyCity: 'Devlopeville',
          companyState: 'GA',
          companyAddress: '123 fake rd.'
        },
        {
          companyName: 'another test',
          companyZip: '30000',
          companyCity: 'Devlopeville',
          companyState: 'GA',
          companyAddress: '123 fake rd.'
        },
        {
          companyName: 'more testing',
          companyZip: '30000',
          companyCity: 'Devlopeville',
          companyState: 'GA',
          companyAddress: '123 fake rd.'
        }
      ],
      currentCompany: {
        companyName: '',
        companyZip: '',
        companyCity: '',
        companyState: '',
        companyAddress: ''
      }
    };
  }
  handleChange = e => {
    if (e.target.value === 'create') {
      return this.setState({
        currentCompany: {
          companyName: '',
          companyZip: '',
          companyCity: '',
          companyState: '',
          companyAddress: ''
        }
      });
    } else {
      this.state.companyList.map(company => {
        if (company.companyName === e.target.value) {
          return this.setState({
            selected: e.target.value,
            currentCompany: company
          });
        }
        return company;
      });
    }
  };
  render() {
    return (
      <Grid container spacing={24}>
        <section className="settings-view">
          <div>
            <Typography
              style={{ fontSize: '4rem', marginBottom: 40 }}
              variant="h3"
              gutterBottom
            >
              Personal Info
            </Typography>
            <SettingsForm />
          </div>
          <div>
            <Typography
              style={{ fontSize: '4rem', marginBottom: 40 }}
              variant="h3"
              gutterBottom
            >
              Company Info
            </Typography>
            {/* add a drop down for current companies and auto fill company form when clicked. Change state of form button from save to edit */}
            <CompanyDropdownList
              companies={this.state.companyList}
              handleChange={this.handleChange}
            />

            {this.state.selected === 'create' ? (
              <CompanyForm
                company={{
                  currentCompany: {
                    companyName: '',
                    companyZip: '',
                    companyCity: '',
                    companyState: '',
                    companyAddress: ''
                  }
                }}
              />
            ) : (
              <CompanyForm
                company={this.state.currentCompany}
                selected={this.state.selected}
              />
            )}
          </div>
        </section>
      </Grid>
    );
  }
}

export default SettingsPage;
