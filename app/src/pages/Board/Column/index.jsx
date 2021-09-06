import styles from './styles.module.css';
import { useColumnCrud } from './useColumnCrud';
import { ColumnHeaderWrap } from './components/ColumnHeaderWrap';
import { ColumnBodyWrap } from './components/ColumnBodyWrap';
import { ColumnFooterWrap } from './components/ColumnFooterWrap';
import { observer } from 'mobx-react';

export const Column = observer(_Column);

function _Column(props) {
  const { crudService, formService } = useColumnCrud(props);

  console.log('render COLUMN', props.column);

  return (
    <section data-column-id={props.column.id} className={styles.section}>
      <ColumnHeaderWrap crudService={crudService} {...formService} {...props} />
      <ColumnBodyWrap {...props} />
      <ColumnFooterWrap {...props} />
    </section>
  );
}
