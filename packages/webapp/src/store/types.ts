import authentication from './authentication/authentication.types';
import accounts from './accounts/accounts.types';
import cashflowAccounts from './cashflow-accounts/cashflow-accounts.types';
import accounting from './manual-journals/manual-journals.types';
import currencies from './currencies/currencies.types';
import customFields from './custom-fields/custom-fields.types';
import customViews from './custom-views/custom-views.types';
import dashboard from './dashboard/dashboard.types';
import expenses from './expenses/expenses.types';
import items from './items/items.types';
import preferences from './preferences/preferences.types';
import users from './users/users.types';
import financialStatements from './financial-statement/financial-statements.types';
import itemCategories from './item-categories/items-category.type';
import settings from './settings/settings.type';
import search from './search/search.type';
import register from './registers/register.type';
import exchangeRate from './exchange-rate/exchange.type';
import customer from './customers/customers.type';
import estimates from './estimate/estimates.types';
import invoices from './invoice/invoices.types';
import receipts from './receipts/receipts.type';
import bills from './bills/bills.type';
import vendors from './vendors/vendors.types';
import paymentReceives from './payment-receives/payment-receives.type';
import paymentMades from './payment-mades/payment-mades.type';
import organizations from './organizations/organizations.types';
import subscription from './subscription/subscription.types';
import inventoryAdjustments from './inventory-adjustments/inventory-adjustment.type';
import creditNote from './credit-note/credit-note.type';
import vendorCredit from './vendor-credit/vendor-credit.type';
import WarehouseTransfer from './warehouse-transfer/warehouse-transfer.type';
import projects from './project/projects.type'
import plans from './plans/plans.types';

export default {
  ...authentication,
  ...accounts,
  ...cashflowAccounts,
  ...currencies,
  ...customFields,
  ...customViews,
  ...dashboard,
  ...expenses,
  ...items,
  ...preferences,
  ...users,
  ...financialStatements,
  ...itemCategories,
  ...settings,
  ...accounting,
  ...search,
  ...register,
  ...exchangeRate,
  ...customer,
  ...vendors,
  ...estimates,
  ...invoices,
  ...receipts,
  ...bills,
  ...paymentReceives,
  ...paymentMades,
  ...organizations,
  ...subscription,
  ...inventoryAdjustments,
  ...plans,
  ...creditNote,
  ...vendorCredit,
  ...WarehouseTransfer,
  ...projects
};
