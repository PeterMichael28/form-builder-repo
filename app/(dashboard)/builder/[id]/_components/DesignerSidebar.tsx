import React from 'react'
import FormElementsSidebar from './FormElementsSidebar';
import useDesigner from '@/hooks/useDesigner';
import PropertiesFormSidebar from './PropertiesFormSidebar';

type Props = {}

const DesignerSidebar = (props: Props) => {

  const { selectedElement } = useDesigner();
  return (
      <aside className="w-[250px] md:w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
          {!selectedElement && <FormElementsSidebar />}
      {selectedElement && <PropertiesFormSidebar />}
   </aside>
  )
}

export default DesignerSidebar