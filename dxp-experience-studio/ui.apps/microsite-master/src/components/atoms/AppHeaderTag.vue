<script>
export default {
  props: {
    tagType: String,
    label: String,
    grade: String,
    shape: {
      type: String,
      default: "square"
    },
    tabindex: Number
  },
  render() {
    switch (this.grade) {
      case "h5":
        return (
          <h5
            domPropsInnerHTML={this.label}
            class={this.shape}
            tabindex={this.tabindex}
          >
            {this.label}
          </h5>
        );

      case "h4":
        return (
          <h4
            domPropsInnerHTML={this.label}
            class={this.shape}
            tabindex={this.tabindex}
          >
            {this.label}
          </h4>
        );

      case "h3":
        return (
          <h3
            domPropsInnerHTML={this.label}
            class={this.shape}
            tabindex={this.tabindex}
          >
            {this.label}
          </h3>
        );

      case "h2":
        return (
          <h2
            domPropsInnerHTML={this.label}
            class={this.shape}
            tabindex={this.tabindex}
          >
            {this.label}
          </h2>
        );

      case "h1":
        return (
          <h1
            domPropsInnerHTML={this.label}
            class={this.shape}
            tabindex={this.tabindex}
          >
            {this.label}
          </h1>
        );

      default:
        return (
          <h1
            domPropsInnerHTML={this.label}
            class={this.shape}
            tabindex={this.tabindex}
          >
            {this.label}
          </h1>
        );
    }
  }
};
</script>
