import React, { ReactElement, useCallback, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from '@material-ui/core';

import { IActionButtonProps } from '^controls/ActionButton';

import styles from './stories.styles.module.scss';

import DialogComponent, { IDialogProps } from '.';

const Template: StoryFn<IDialogProps> = (args: IDialogProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenClick = useCallback(
    (): void => {
      setIsOpen(true);
    },
    [],
  );

  const handleClose = useCallback(
    (): void => {
      setIsOpen(false);
    },
    [],
  );

  return (
    <div>
      <Button
        onClick={handleOpenClick}
      >
        Open
      </Button>
      <DialogComponent
        {...args}
        open={isOpen}
        onClose={handleClose}
        proceedButtonProps={{
          ...args.proceedButtonProps as IActionButtonProps,
          onClick: handleClose,
        }}
      />
    </div>
  );
};

export const Dialog = Template.bind({});
Dialog.args = {
  title: 'Title',
  children: (
    <div>
      Modal content
    </div>
  ),
} as IDialogProps;

export const DialogWithOutCloseButtonInFooter = Template.bind({});
DialogWithOutCloseButtonInFooter.args = {
  title: 'Title',
  closeButtonProps: null,
  children: (
    <div>
      Modal content
    </div>
  ),
} as IDialogProps;

export const DialogWithFixedHeight = Template.bind({});
DialogWithFixedHeight.args = {
  title: 'Title',
  closeButtonProps: null,
  className: styles.dialogFixedSize,
  children: (
    <div>
      Modal content
    </div>
  ),
} as IDialogProps;

export const DialogWithLargeContent = Template.bind({});
DialogWithLargeContent.args = {
  title: 'Title',
  closeButtonProps: null,
  children: (
    <div>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien massa. In imperdiet vestibulum dui, non ultricies massa semper id. Aliquam urna orci, fringilla sit amet enim ac, imperdiet volutpat mi. Aenean pharetra lorem vitae quam malesuada pellentesque. Pellentesque ullamcorper, erat convallis commodo commodo, mauris urna ultricies mi, tristique varius tortor tellus ac dolor. Etiam finibus blandit efficitur. Quisque id dui eu risus volutpat pulvinar. Aenean gravida venenatis metus eu ultricies. Etiam diam urna, faucibus sit amet faucibus id, maximus eu risus. Duis ullamcorper ligula id magna posuere, eu elementum lectus vestibulum. Maecenas aliquet quis justo at placerat. Phasellus in nunc hendrerit, tempus arcu quis, fringilla risus. Aenean eget iaculis lorem. Suspendisse vehicula pellentesque velit, quis tincidunt dui commodo at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce tempus, nulla ac porta euismod, tortor nunc faucibus nisi, eget pellentesque nunc ante luctus est.

Praesent imperdiet justo et pharetra volutpat. Morbi ut neque neque. Maecenas quis lobortis tortor, sit amet sodales purus. Ut et feugiat velit. Pellentesque congue dolor non ultrices faucibus. Sed in fermentum dolor, eget faucibus quam. Nunc vitae nunc finibus odio convallis molestie congue eu enim. Nunc ex odio, venenatis eu consectetur eu, facilisis eu odio. Curabitur tincidunt est sit amet mi rutrum, id hendrerit ante sodales. Pellentesque eleifend sodales diam, vitae commodo dui mattis vitae. Fusce sed metus suscipit, interdum orci eget, consectetur turpis. Etiam vitae nibh non turpis feugiat convallis. Fusce id iaculis mi. Phasellus pellentesque feugiat viverra. Nunc vel ligula mollis, fringilla massa vel, faucibus massa. Nulla suscipit hendrerit lectus, in commodo dolor.

Sed sed vestibulum ligula. Etiam ipsum ante, imperdiet at nulla quis, lacinia egestas arcu. Ut dapibus lobortis dui, ut dictum magna interdum in. Mauris convallis, elit vel hendrerit ullamcorper, metus lorem rutrum odio, et convallis metus tellus ac elit. Curabitur in libero sapien. Curabitur imperdiet tempus est ac tempus. Curabitur quis pretium nulla, vel sollicitudin dui. Ut finibus augue neque, ac imperdiet nisl efficitur vitae. Curabitur molestie lacus a ex interdum ullamcorper. Phasellus a vulputate risus. Fusce efficitur pretium purus non consectetur. Aliquam consequat tortor sem, a feugiat mi commodo vitae. Integer commodo suscipit lacus in faucibus.

Morbi semper dignissim purus vitae rhoncus. Duis et semper elit, id elementum urna. In consectetur risus aliquet tempor pharetra. Maecenas accumsan viverra lectus sed commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam posuere, dui convallis aliquet venenatis, dolor leo efficitur libero, lobortis sagittis massa lectus in urna. Nulla vestibulum imperdiet felis nec tempus.

In hac habitasse platea dictumst. In varius arcu et augue eleifend, eu eleifend purus molestie. Nulla facilisi. Duis sit amet leo laoreet, tristique elit et, aliquam nulla. Quisque id sollicitudin neque. Donec eu est ex. In imperdiet laoreet enim, at faucibus lacus rutrum quis. Mauris dictum dui molestie aliquam tincidunt. Quisque vitae scelerisque nulla.

Quisque eget nulla sed metus hendrerit iaculis. Ut sodales nulla enim. Mauris sapien orci, maximus in tortor at, tempus laoreet felis. Nulla vitae suscipit eros. In malesuada nisl sed nisl fringilla, sit amet molestie leo dapibus. Nullam cursus magna at ligula finibus, quis congue risus accumsan. Sed id rhoncus libero. Donec mollis vehicula mauris, a pharetra magna varius non. Donec et quam blandit, consectetur lorem nec, dapibus ligula. Sed hendrerit finibus lobortis. Pellentesque fringilla tristique felis, et maximus arcu malesuada tristique. Ut sit amet vehicula lorem, non congue velit.

Aenean sed magna feugiat, lacinia sapien vel, consectetur ligula. Vivamus molestie dapibus lacus. Nam lorem lorem, laoreet vitae nulla quis, placerat dignissim dui. Donec ullamcorper diam nunc, sit amet finibus nisl sollicitudin in. Nunc tellus velit, eleifend sit amet neque non, facilisis facilisis nulla. Aenean ut nisl sed diam rutrum vulputate quis at felis. Etiam eget sagittis sem, non venenatis turpis. Aenean leo enim, semper vel dolor a, finibus viverra erat. Donec faucibus iaculis rhoncus.

Aenean eu consectetur dolor, ut iaculis lectus. Aliquam erat volutpat. Vivamus vitae nisi sed risus pellentesque ornare sed ut lorem. Mauris egestas viverra rutrum. Nullam neque tellus, commodo quis porttitor at, laoreet id dui. Quisque efficitur diam id diam pulvinar malesuada. In euismod, tellus sit amet efficitur mattis, nunc augue sagittis ex, eget maximus magna ligula non risus. Sed felis turpis, lobortis et rhoncus at, interdum quis justo. Mauris facilisis nisi eu diam facilisis, quis malesuada elit molestie.

Donec volutpat quis orci id ultrices. Donec tincidunt venenatis odio eget convallis. Donec luctus augue quis accumsan tempor. Nullam a ante vel augue dapibus sagittis. Mauris tincidunt diam tempus, auctor libero ut, pharetra magna. Curabitur sed auctor neque. Morbi facilisis, dui gravida auctor ullamcorper, ex tellus ornare neque, et venenatis augue diam scelerisque velit. Integer id ante vel tortor convallis vulputate. Pellentesque condimentum accumsan ipsum in convallis. Aliquam eu lacus sit amet dolor ultrices hendrerit vitae ut velit. Aliquam pharetra vitae turpis sed molestie. Curabitur ornare, velit id commodo consectetur, nisl lacus lobortis orci, quis porta ipsum libero dapibus nunc. Ut in ante pharetra, scelerisque mauris et, iaculis ligula. Phasellus vel fermentum urna. Nunc commodo, neque eget placerat congue, velit quam convallis sem, nec iaculis diam velit a dolor. Phasellus sem tortor, luctus nec libero molestie, aliquam tincidunt ligula.

Nunc neque tellus, porta sit amet gravida eget, varius eget lacus. Duis vitae blandit nibh. Sed ut orci viverra, faucibus est vel, aliquet libero. Suspendisse euismod quam dignissim gravida faucibus. Nam convallis velit at dui facilisis aliquet. Donec sit amet malesuada risus. In posuere pellentesque condimentum. Fusce non sapien vitae nunc dapibus sollicitudin sit amet at leo. Donec ut erat ac nisl cursus facilisis id tincidunt orci. Ut tempus purus ac sapien blandit ultrices. Quisque congue mi leo, eget ultricies felis rutrum finibus. Duis nisi eros, hendrerit eget odio non, aliquet faucibus ex. Etiam elit felis, elementum mattis sem sed, mattis vehicula mi. Mauris id auctor dolor, lacinia lobortis ipsum. Phasellus ut mauris quis enim pellentesque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </div>
  ),
} as IDialogProps;

export default {
  title: 'AdminUI/Feedback/Dialog',
  component: DialogComponent,
} as Meta<IDialogProps>;
