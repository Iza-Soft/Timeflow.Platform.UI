class IconSvgConfig {
  readonly HOME_ICON_FILL: string;
  readonly AVATAR_ICON_FILL: string;
  readonly HOME_ICON_STROKE: string;
  readonly AVATAR_ICON_STROKE: string;
  readonly REDO_ICON_FILL: string;
  readonly REDO_ICON_STROKE: string;
  readonly UNDO_ICON_FILL: string;
  readonly UNDO_ICON_STROKE: string;
  readonly SQUARE_PLUS_ICON_FILL: string;
  readonly EDIT_ICON_STROKE: string;
  readonly TAGS_ICON: string;
  readonly NOT_FOUND_ICON: string;
  readonly WORKING_ICON: string;

  constructor() {
    this.HOME_ICON_FILL = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M22.849,7.68l-.869-.68h.021V2h-2v3.451L13.849,.637c-1.088-.852-2.609-.852-3.697,0L1.151,7.68c-.731,.572-1.151,1.434-1.151,2.363v13.957H8V15c0-1.105,.895-2,2-2h4c1.105,0,2,.895,2,2v9h8V10.043c0-.929-.42-1.791-1.151-2.363Z" fill="#fafafa"/></svg>`;
    this.AVATAR_ICON_FILL = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z" fill="#fafafa"/><circle cx="12" cy="6" r="6" fill="#fafafa"/></svg>`;
    this.HOME_ICON_STROKE = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M22.849,7.68l-.869-.68h.021V2h-2v3.451L13.849,.637c-1.088-.852-2.609-.852-3.697,0L1.151,7.68c-.731,.572-1.151,1.434-1.151,2.363v13.957H9V15c0-.551,.448-1,1-1h4c.552,0,1,.449,1,1v9h9V10.043c0-.929-.42-1.791-1.151-2.363Zm-.849,14.32h-5v-7c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v7H2V10.043c0-.31,.14-.597,.384-.788L11.384,2.212c.363-.284,.869-.284,1.232,0l9,7.043c.244,.191,.384,.478,.384,.788v11.957Z" fill="#fafafa"/></svg>`;
    this.AVATAR_ICON_STROKE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z" fill="#fafafa"/><path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z" fill="#fafafa"/></g></svg>`;
    this.REDO_ICON_FILL = `<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M17.244,4A2,2,0,0,0,13.83,5.414V7H9a9.01,9.01,0,0,0-9,9v7a1,1,0,0,0,2,0,6.006,6.006,0,0,1,6-6h5.83v1.586A2,2,0,0,0,17.244,20l5.879-5.879a3,3,0,0,0,0-4.242Z" fill="#6e1c6b"/></svg>`;
    this.REDO_ICON_STROKE = `<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M0,23V16A9.01,9.01,0,0,1,9,7h4.83V5.414A2,2,0,0,1,17.244,4l5.88,5.879a3,3,0,0,1,0,4.242L17.244,20a2,2,0,0,1-3.414-1.414V17H8a6.006,6.006,0,0,0-6,6,1,1,0,0,1-2,0ZM15.83,8a1,1,0,0,1-1,1H9a7.008,7.008,0,0,0-7,7v1.714A7.984,7.984,0,0,1,8,15h6.83a1,1,0,0,1,1,1v2.586l5.879-5.879a1,1,0,0,0,0-1.414L15.83,5.414Z" fill="#6e1c6b"/></svg>`;
    this.UNDO_ICON_FILL = `<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M15,7H10.17V5.414A2,2,0,0,0,6.756,4L.876,9.879a3,3,0,0,0,0,4.242L6.756,20a2,2,0,0,0,3.414-1.414V17H16a6.006,6.006,0,0,1,6,6,1,1,0,0,0,2,0V16A9.01,9.01,0,0,0,15,7Z" fill="#6e1c6b"/></svg>`;
    this.UNDO_ICON_STROKE = `<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23,24a1,1,0,0,1-1-1,6.006,6.006,0,0,0-6-6H10.17v1.586A2,2,0,0,1,6.756,20L.877,14.121a3,3,0,0,1,0-4.242L6.756,4A2,2,0,0,1,10.17,5.414V7H15a9.01,9.01,0,0,1,9,9v7A1,1,0,0,1,23,24ZM8.17,5.414,2.291,11.293a1,1,0,0,0,0,1.414L8.17,18.586V16a1,1,0,0,1,1-1H16a7.984,7.984,0,0,1,6,2.714V16a7.008,7.008,0,0,0-7-7H9.17a1,1,0,0,1-1-1Z" fill="#6e1c6b"/></svg>`;
    this.SQUARE_PLUS_ICON_FILL = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-3,13h-3v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-3c0-.553,.448-1,1-1s1,.447,1,1v3h3c.552,0,1,.447,1,1s-.448,1-1,1Z" fill="#328d20"/></svg>`;
    this.EDIT_ICON_STROKE = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
                              <title>edit</title>
                              <path d="M17.769 6.237c0.122-0.162 0.313-0.266 0.53-0.266s0.408 0.104 0.528 0.265l0.001 0.002 6.935 6.935c0.162 0.122 0.266 0.313 0.266 0.53s-0.104 0.408-0.265 0.528l-0.002 0.001-16.368 16.368-7.614 1.379c-0.079 0.015-0.169 0.024-0.261 0.024-0.418 0-0.794-0.178-1.057-0.463l-0.001-0.001c-0.296-0.265-0.481-0.647-0.481-1.073 0-0.087 0.008-0.172 0.022-0.254l-0.001 0.009 1.399-7.614zM5.518 26.482v-2.998h-2.238l-0.759 3.997 1.998 1.998 3.997-0.739v-2.258zM7.776 21.226c0.139 0.195 0.365 0.32 0.62 0.32s0.48-0.125 0.618-0.318l9.615-9.615c0.195-0.139 0.32-0.365 0.32-0.62s-0.125-0.48-0.318-0.618l-0.002-0.002c-0.139-0.195-0.365-0.32-0.62-0.32s-0.48 0.125-0.618 0.318l-9.615 9.615c-0.195 0.139-0.32 0.365-0.32 0.62s0.125 0.48 0.318 0.618l0.002 0.002zM31.119 8.875l-2.858 2.878c-0.122 0.162-0.313 0.266-0.53 0.266s-0.408-0.104-0.528-0.265l-0.001-0.002-6.935-6.935c-0.171-0.117-0.281-0.31-0.281-0.53s0.11-0.413 0.279-0.528l0.002-0.001 2.858-2.878c0.537-0.543 1.281-0.88 2.105-0.88 0.012 0 0.024 0 0.036 0h-0.002c0.009 0 0.020 0 0.031 0 0.818 0 1.557 0.337 2.087 0.879l3.738 3.738c0.531 0.519 0.861 1.243 0.861 2.044 0 0.033-0.001 0.066-0.002 0.099v-0.005c0.001 0.025 0.001 0.054 0.001 0.083 0 0.798-0.329 1.519-0.86 2.035l-0.001 0.001z" fill="#6e1c6b"/>
                            </svg>`;
    this.TAGS_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
                        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
                      </svg>`;
    this.NOT_FOUND_ICON = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#b90909}</style><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
  }
}

const config = new IconSvgConfig();

export const ICON_SVG_CONFIG = config;
