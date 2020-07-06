const { Helper } = codeceptjs;

class LocalStorage extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

	async store(key, json) {
		const { page } = this.helpers.Puppeteer;

		await page.evaluate((key, json) => {
			return localStorage.setItem(key, JSON.stringify(json));
		}, key, json);
	}
}

module.exports = LocalStorage;
