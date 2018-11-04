import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

public class Cracker {
    private ArrayList<Cryptogram> listOfCryptograms;
    private Map<Integer, Integer> asciisigns;
    ArrayList<Integer> key;

    /*
    Constructor reading file with cryptograms and initializing ASCII hashmap, where key is ASCI dec number and value as chance of letter in polish language
     */
    public Cracker(String path) {
        listOfCryptograms = new ArrayList<>();
        String line;
        try {
            BufferedReader reader = new BufferedReader(new FileReader(path));
            while ((line = reader.readLine()) != null) {
                Cryptogram cryptogram = new Cryptogram(line);
                listOfCryptograms.add(cryptogram);
            }
        } catch (NullPointerException e) {
            e.printStackTrace();
        }catch (IOException e) {
            e.printStackTrace();
        }
        asciisigns = new HashMap<>();
        asciisigns.put(32, 1720); // ' ' - space
        asciisigns.put(97, 990);  // 'a'
        asciisigns.put(101, 877);  // 'e'
        asciisigns.put(111, 860);  // 'o'
        asciisigns.put(105, 821);  // 'i'
        asciisigns.put(122, 647);  // 'z'
        asciisigns.put(110, 572);  // 'n'
        asciisigns.put(115, 498);  // 's'
        asciisigns.put(114, 469);  // 'r'
        asciisigns.put(119, 465);  // 'w'
        asciisigns.put(99, 436);  // 'c'
        asciisigns.put(116, 398);  // 't'
        asciisigns.put(108, 392);  // 'l'
        asciisigns.put(121, 376);  // 'y'
        asciisigns.put(107, 351);  // 'k'
        asciisigns.put(100, 325);  // 'd'
        asciisigns.put(112, 313);  // 'p'
        asciisigns.put(109, 280);  // 'm'
        asciisigns.put(117, 250);  // 'u'
        asciisigns.put(106, 228);  // 'j'
        asciisigns.put(44, 149);  // ','
        asciisigns.put(98, 147);  // 'b'
        asciisigns.put(103, 142);  // 'g'
        asciisigns.put(104, 108);  // 'h'
        asciisigns.put(46, 84);  // '.'
        asciisigns.put(102, 30);  // 'f'
        asciisigns.put(113, 14);  // 'q'
        asciisigns.put(120, 8);  // 'x'
        asciisigns.put(63, 6);  // '?'
        asciisigns.put(118, 4);  // 'v'
        asciisigns.put(33, 2);  // '!'
        asciisigns.put(34, 1);  // '"'
        asciisigns.put(40, 1);  // '('
        asciisigns.put(41, 1);  // ')'
        asciisigns.put(45, 1);  // '-'
        asciisigns.put(48, 1);  // '0'
        asciisigns.put(49, 1);  // '1'
        asciisigns.put(50, 1);  // '2'
        asciisigns.put(51, 1);  // '3'
        asciisigns.put(52, 1);  // '4'
        asciisigns.put(53, 1);  // '5'
        asciisigns.put(54, 1);  // '6'
        asciisigns.put(55, 1);  // '7'
        asciisigns.put(56, 1);  // '8'
        asciisigns.put(57, 1);  // '9'
        asciisigns.put(58, 1);  // ':'
        asciisigns.put(59, 1);  // ';'

        for (int i = 65; i < 91; i++) {
            asciisigns.put(i, 1); // Large letters
        }
    }

    /*
    Function finding best key value for cryptograms.
     */
    public ArrayList<Integer> decode() {
        ArrayList<Integer> key = new ArrayList<>();

        for (int i = 0; i < longestCryptogram(); i++) {
            Map<Integer, Integer> possibleKeys = new HashMap<>();
            ArrayList<Cryptogram> currentCryptograms = cryptogramsWithIthByte(i);
            for (Cryptogram cryptogram : currentCryptograms ) {
                for (Integer possibleKey : asciisigns.keySet()) {
                    Integer a = cryptogram.getByte(i) ^ possibleKey;
                    Integer b = asciisigns.get(possibleKey);
                    if (possibleKeys.containsKey(a)) {
                        possibleKeys.put(a, possibleKeys.get(a) + b);
                    } else {
                        possibleKeys.put(a, b);
                    }
                }
            }
            possibleKeys = possibleKeys.entrySet().stream()
                    .sorted(HashMap.Entry.comparingByValue(Comparator.reverseOrder()))
                    .collect(Collectors.toMap(
                            HashMap.Entry::getKey,
                            HashMap.Entry::getValue,
                            (e1, e2) -> e1,
                            LinkedHashMap::new));
            int bestCandidate= 32; // ' ' - space
            int bestMatch= 0;
            loop:
            for (Integer candidate : possibleKeys.keySet()) {
                int match= 0;
                for (Cryptogram cryptogram : currentCryptograms ) {
                    for (Integer sign : asciisigns.keySet()) {
                        if (sign == (cryptogram.getByte(i) ^ candidate)) {
                            match++;
                        }
                    }
                }
                if (match > bestMatch) {
                    bestMatch = match;
                    bestCandidate = candidate;
                }
                if (listOfCryptograms.size() <= match) {
                    break loop;
                }
            }
            key.add(bestCandidate);
        }
        return key;
    }
    /*
    Returns cryptograms with ith byte.
     */
    private ArrayList<Cryptogram> cryptogramsWithIthByte(int ithByte) {
        ArrayList<Cryptogram> cryptograms = new ArrayList<>();
        for (Cryptogram cryptogram : listOfCryptograms) {
            if (ithByte < cryptogram.getSize())
                cryptograms .add(cryptogram);
        }
        return cryptograms ;
    }
    /*
    Returns number of bytes of longest cryptogram.
     */
    private int longestCryptogram() {
        int length = 0;
        for (Cryptogram c : listOfCryptograms) {
            if (c.getSize() > length)
                length = c.getSize();
        }
        return length;
    }
    /*
    Print decoded cryptograms.
     */
    public void print() {
        key = decode();
        System.out.println(key);
        for (Cryptogram cryptogram : listOfCryptograms) {
            for (int i = 0; i < cryptogram.getSize(); i++) {
                System.out.print((char) (cryptogram.getByte(i) ^ key.get(i)));
            }
            System.out.println();
        }
    }
    public void zad2(){
        String line;
        Cryptogram crypto=null;
        try {
            BufferedReader reader = new BufferedReader(new FileReader("zad2.txt"));
            line = reader.readLine();
            crypto = new Cryptogram(line);
        } catch (NullPointerException e) {
            e.printStackTrace();
        }catch (IOException e) {
            e.printStackTrace();
        }
        Integer[] s={(int)'d',(int)'3',(int)'9',(int)'b',(int)'2',(int)'b',(int)'5',(int)'d'};
        for(int i=0;i<=crypto.getSize()-8;i++){
            System.out.print("i: "+i+" ");
            for(int j=i;j<i+8;j++){
                System.out.print((char)(crypto.getByte(j) ^ s[j-i]));
            }
            System.out.println();
        }
    }
}
