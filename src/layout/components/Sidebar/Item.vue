<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];
    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'sub-el-icon']} />);
      } else {
        const imgSrc = require('../../../assets/imgs/' + icon);
        vnodes.push(<img class='sliderImg' src={imgSrc} />);
      }
    }

    if (title) {
      vnodes.push(
        <span slot='title' class='sliderTitle'>
          {title}
        </span>,
      );
    }
    return vnodes;
  },
};
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
.sliderTitle {
  font-size: 14px;
}
</style>
